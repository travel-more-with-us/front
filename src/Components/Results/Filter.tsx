/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';
import { StayLink } from '../UI/StayLink';
import CheckIcon from '@material-ui/icons/Check';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { updateFilters } from '../../store/actions';
import { FilterOptionInterface, StayInterface } from '../../types';

const StyledFilter = styled.div`
padding: 24px;

@media screen and (max-width: 1024px) {
  padding: 8px;
`;

const FilterName = styled.h5`
font-size: 18px;
font-weight: 600;
margin: 0 0 16px 0;
`;

const FiltersBlock = styled.div`
 display: flex;
 flex-direction: column;
 gap: 8px;
`;

const FilterBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Count = styled.p`
margin: 0;
font-size: 16px;
font-weight: 600;
width: 40px;
color: ${props => props.theme.placeholderColor};
`;

const CheckBox = styled.input`
  width: 24px;
  height: 24px;
  appearance: none;
  border: 2px solid ${props => props.theme.placeholderColor};
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 18px;
    height: 18px;
  }

  &:checked {
    background: ${props => props.theme.primaryColor};
    border: none;
  }
`;

const CheckboxBlock = styled.div`
display: flex;
align-items: center;
gap: 8px;
position: relative;
`;

const StyledCheckmarkIcon = styled<any>(CheckIcon)`
  font-size: 16px;
  position: absolute;
  left: 9px;
  top: 50%;
  transform: translate(0, -50%);
  color: #fff;
  pointer-events: none;
`;

const Option = styled.label`
font-size: 16px;
font-family: Nunito;
line-height: 150%;

@media screen and (max-width: 1024px) {
  font-size: 14px;
}
`;

interface Props {
  name: string;
  options: FilterOptionInterface[];
  seeMore?: boolean;
  stays: StayInterface[];
  keyName: string;
  resetFilters: boolean;
  onResetComplete: () => void;
}

export const Filter: React.FC <Props> = ({ name, options, seeMore, stays, keyName, resetFilters, onResetComplete }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedFilters, setSelectedFilters] = React.useState<FilterOptionInterface[]>([]);
  const dispatch = useDispatch();

  const appliedOptions = React.useMemo(() => {
    if (seeMore && open === false) {
      return options.slice(0, 5);
    }

    return options;
  }, [options, open, seeMore]);
  

  function toggleList() {
    setOpen(!open);
  }

  function selectFilter(elem: FilterOptionInterface) {
    if (selectedFilters.some((filter: FilterOptionInterface) => filter.name === elem.name)) {
      setSelectedFilters((prev: FilterOptionInterface[]) => [...prev].filter((filter: FilterOptionInterface) => filter.name !== elem.name));
    } else {
      setSelectedFilters((prev: FilterOptionInterface[]) => [...prev, elem]);
    }
  }

  React.useEffect(() => {
    const obj = {
      [keyName]: selectedFilters,
    };
    dispatch(updateFilters(obj));
  }, [selectedFilters]);

  React.useEffect(() => {
    if (resetFilters) {
      setSelectedFilters([]);
      onResetComplete();
    }
  }, [resetFilters, onResetComplete]);

  return (
    <StyledFilter>
      <FilterName>
        {name}
      </FilterName>
      <FiltersBlock>
        {appliedOptions.map((option: FilterOptionInterface) => (
          <FilterBlock key={option.name}>
            <CheckboxBlock>
              <CheckBox 
                type='checkbox' 
                id={option.name}
                onChange={() => {
                  selectFilter(option);
                }}
                checked={selectedFilters.some((fil: FilterOptionInterface) => fil.name === option.name)}
              />
              <StyledCheckmarkIcon icon={faCheck} />
              <Option htmlFor={option.name}>
                {option.name}
              </Option>
            </CheckboxBlock>
            <Count>
              {stays.filter((stay: StayInterface) => {
                if (keyName === 'rating' && typeof(option.value) === 'number') {
                  return Math.round(stay[keyName]) === option.value;
                }

                if (keyName === 'amenities') {
                  if (stay.amenities.some((amenity: number) => {
                    return amenity === option.value;
                  })) {
                    return stay;
                  }
                }

                return stay[keyName] === option.value;

              }).length}
            </Count>
          </FilterBlock>
        ))}
        {seeMore !== undefined && (
          <StayLink click={toggleList}>
            {open ? 'Hide' : 'See more'}
          </StayLink>
        )}
      </FiltersBlock>
    </StyledFilter>
  );
};

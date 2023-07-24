/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';
import { StayLink } from '../UI/StayLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { RangeBlock } from './RangeBlock';
import { FilterPriceOptionInterface, StayInterface } from '../../types';
import { useGetCoefficient } from '../../hooksAndHelpers/useGetCoefficient';
import { useDispatch } from 'react-redux';
import { updateFilters } from '../../store/actions';

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
color: ${props => props.theme.placeholderColor};
width: 40px;
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

const StyledCheckmarkIcon = styled(FontAwesomeIcon)`
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
  options: FilterPriceOptionInterface[];
  seeMore?: boolean;
  stays: StayInterface[];
  resetFilters: boolean;
  onResetComplete: () => void;
}

export const FilterWithRange: React.FC <Props> = ({ name, options, seeMore, stays, resetFilters, onResetComplete}) => {
  const [open, setOpen] = React.useState(false);
  const [selectedFilters, setSelectedFilters] = React.useState<FilterPriceOptionInterface[]>([]);
  const coefficient = useGetCoefficient();
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

  const sortedStays: StayInterface[] = React.useMemo(() => {
    if (stays.length !== 0) {
      return [...stays].sort((stay1, stay2) => stay1.price - stay2.price);
    }

    return [...stays];
  }, [stays]);

  function selectFilter(elem: FilterPriceOptionInterface) {
    if (selectedFilters.some((filter: FilterPriceOptionInterface) => filter.name === elem.name)) {
      setSelectedFilters((prev: FilterPriceOptionInterface[]) => [...prev].filter((filter: FilterPriceOptionInterface) => filter.name !== elem.name));
    } else {
      setSelectedFilters((prev: FilterPriceOptionInterface[]) => [...prev, elem]);
    }
  }

  React.useEffect(() => {
    const obj = {
      priceCheckboxFilters: selectedFilters,
    };
    dispatch(updateFilters(obj));
  }, [selectedFilters]);

  React.useEffect(() => {
    if (resetFilters) {
      setSelectedFilters([]);
      onResetComplete();
    }
  }, [resetFilters, onResetComplete]);

  if (!sortedStays || sortedStays.length === 0) {
    return null;
  }

  return (
    <StyledFilter>
      <FilterName>
        {name}
      </FilterName>
      <RangeBlock 
        min={0}
        max={sortedStays && (sortedStays[sortedStays.length - 1].price * coefficient || 2000)}
      />
      <FiltersBlock>
        {appliedOptions.map((option: FilterPriceOptionInterface) => (
          <FilterBlock key={option.name}>
            <CheckboxBlock>
              <CheckBox 
                type='checkbox' 
                id={option.name}
                onChange={() => {
                  selectFilter(option);
                }}
                checked={selectedFilters.some((fil: FilterPriceOptionInterface) => fil.name === option.name)}
              />
              <StyledCheckmarkIcon icon={faCheck} />
              <Option htmlFor={option.name}>
                {option.name}
              </Option>
            </CheckboxBlock>
            <Count>
              {stays && stays.filter((stay: StayInterface) => stay.price * coefficient > option.min && stay.price * coefficient <= option.max).length}
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

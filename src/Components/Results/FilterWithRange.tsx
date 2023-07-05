import React from 'react';
import styled from 'styled-components';
import { StayLink } from '../UI/StayLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { RangeBlock } from './RangeBlock';
import { StayInterface } from '../../types';
import { useGetCoefficient } from '../../hooksAndHelpers/useGetCoefficient';
import { useDispatch } from 'react-redux';
import { updateFilters } from '../../store/actions';

const StyledFilter = styled.div`
padding: 24px;
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
`;

interface OptionInterface {
  name: string;
  min: number;
  max: number;
}

interface Props {
  name: string;
  options: OptionInterface[];
  seeMore?: boolean;
  stays: StayInterface[];
}

export const FilterWithRange: React.FC <Props> = ({ name, options, seeMore, stays }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedFilters, setSelectedFilters] = React.useState<any>([]);
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

  const sortedStays: any = React.useMemo(() => {
    return [...stays].sort((stay1, stay2) => stay1.price - stay2.price);
  }, [stays]);

  function selectFilter(elem: any) {
    if (selectedFilters.some((filter: any) => filter.name === elem.name)) {
      setSelectedFilters((prev: any) => [...prev].filter((filter: any) => filter.name !== elem.name));
    } else {
      setSelectedFilters((prev: any) => [...prev, elem]);
    }
  }

  console.log(selectedFilters);

  React.useEffect(() => {
    const obj = {
      priceCheckboxFilters: selectedFilters,
    };
    dispatch(updateFilters(obj));
  }, [selectedFilters]);

  return (
    <StyledFilter>
      <FilterName>
        {name}
      </FilterName>
      <RangeBlock 
        min={0}
        max={sortedStays[sortedStays.length - 1].price * coefficient || 2000}
      />
      <FiltersBlock>
        {appliedOptions.map((option: OptionInterface) => (
          <FilterBlock key={option.name}>
            <CheckboxBlock>
              <CheckBox 
                type='checkbox' 
                id={option.name}
                onChange={() => {
                  selectFilter(option);
                }}
              />
              <StyledCheckmarkIcon icon={faCheck} />
              <Option htmlFor={option.name}>
                {option.name}
              </Option>
            </CheckboxBlock>
            <Count>
              {stays.filter((stay: StayInterface) => stay.price * coefficient > option.min && stay.price * coefficient <= option.max).length}
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

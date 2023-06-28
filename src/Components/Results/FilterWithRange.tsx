import React from 'react';
import styled from 'styled-components';
import { VillaLink } from '../UI/VillaLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { RangeBlock } from './RangeBlock';

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
color: #A0A3BD;
`;

const CheckBox = styled.input`
  width: 24px;
  height: 24px;
  appearance: none;
  border: 2px solid #A0A3BD;
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  &:checked {
    background: #29E3AB;
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

interface Props {
  name: string;
  options: string[];
  seeMore?: boolean;
}

export const FilterWithRange: React.FC <Props> = ({ name, options, seeMore }) => {
  const [open, setOpen] = React.useState(false);

  const appliedOptions = React.useMemo(() => {
    if (seeMore && open === false) {
      return options.slice(0, 5);
    }

    return options;
  }, [options, open, seeMore]);
  

  function toggleList() {
    setOpen(!open);
  }

  return (
    <StyledFilter>
      <FilterName>
        {name}
      </FilterName>
      <RangeBlock />
      <FiltersBlock>
        {appliedOptions.map((option: string) => (
          <FilterBlock>
            <CheckboxBlock>
              <CheckBox type='checkbox' id={option}/>
              <StyledCheckmarkIcon icon={faCheck} />
              <Option htmlFor={option}>
                {option}
              </Option>
            </CheckboxBlock>
            <Count>
              50
            </Count>
          </FilterBlock>
        ))}
        {seeMore !== undefined && (
          <VillaLink click={toggleList}>
            {open ? 'Hide' : 'See more'}
          </VillaLink>
        )}
      </FiltersBlock>
    </StyledFilter>
  );
};

import React from 'react';
import styled from 'styled-components';
import { VillaLink } from '../UI/VillaLink';

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
color: #A0A3BD;
`;

const CheckboxBlock = styled.div`
display: flex;
align-items: center;
gap: 8px;
`;

const Option = styled.span`
font-size: 16px;
font-family: Nunito;
line-height: 150%;
`;

export const Filter: React.FC <any> = ({ name, options, seeMore }) => {
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
      <FiltersBlock>
        {appliedOptions.map((option: any) => (
          <FilterBlock>
            <CheckboxBlock>
              <CheckBox type='checkbox'/>
              <Option>
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

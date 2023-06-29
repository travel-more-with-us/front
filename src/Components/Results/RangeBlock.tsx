import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import Slider from '@mui/material/Slider';
import { styled as styledMui } from '@mui/material/styles';

const StyledRangeBlock = styled.div`
  margin: 0 0 24px 0;
`;

const InputsBlock = styled.div`
display: flex;
justify-content: space-between;
margin: 0 0 16px 0;
`;

const Input = styled.input`
width: 82px;
height: 32px;
padding: 5px 8px;
gap: 8px;
border-radius: 4px;
border: 1px solid ${props => props.theme.disabledColor};
background: #FCFCFC;
box-sizing: border-box;
`;

const Range = styled.div`
  display: flex;
`;

const StyledSlider = styledMui(Slider)<any>(() => ({
  color: '#29E3AB',
  '& .MuiSlider-thumb': {
    '&:hover': {
      boxShadow: 'none',
    },
  },
  '& .MuiSlider-rail': {
    backgroundColor: '#6E7191',
  },
}));

export const RangeBlock = () => {
  const [value, setValue] = React.useState<number[]>([0, 1000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  
  const handleMinInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const min = parseFloat(event.target.value);
    setValue((prevState) => {
      prevState[0] = min;
      return prevState;
    });
  };
  
  const handleMaxInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const max = parseFloat(event.target.value);
    setValue((prevState) => {
      prevState[1] = max;
      return prevState;
    });
  };
  
  return (
    <StyledRangeBlock>
      <InputsBlock>
        <Input type="number" value={value[0]} onChange={handleMinInputChange} />
        <Input type="number" value={value[1]} onChange={handleMaxInputChange} />
      </InputsBlock>
      <Range>
        <StyledSlider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="off"
          min={0}
          max={1000}
          disableSwap
        />
      </Range>
    </StyledRangeBlock>
  );
};

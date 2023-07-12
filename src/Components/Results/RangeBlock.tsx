/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import Slider from '@mui/material/Slider';
import { styled as styledMui } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilters } from '../../store/actions';

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

interface Props {
  min: number;
  max: number;
}

export const RangeBlock: React.FC <Props> = ({ min, max }) => {
  const [value, setValue] = React.useState<number[]>([min, max]);
  const filters = useSelector((state: any) => state.filters);

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
  const dispatch = useDispatch();

  useEffect(() => {
    const obj = {
      priceRange: {
        min: value[0],
        max: value[1]
      }
    };
    dispatch(updateFilters(obj));
  }, [value]);

  useEffect(() => {
    if (value[0] !== filters.priceRange.min || value[1] !== filters.priceRange.max) {
      const arr = [
        filters.priceRange.min,
        filters.priceRange.max,
      ];

      setValue(arr);
    }
  }, [filters.priceRange]);
  
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
          max={max}
          disableSwap
        />
      </Range>
    </StyledRangeBlock>
  );
};

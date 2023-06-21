import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
border: none;
outline: none;
`;

interface Props {
  options: string[];
}

export const MySelect: React.FC <Props> = ({ options }) => {
  return (
    <StyledSelect>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

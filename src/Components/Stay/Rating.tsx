import React from 'react';
import styled from 'styled-components';

const RatingBar = styled.div`
  width: 100%;
  max-width: 134px;
  height: 6px;
  position: relative;
  margin: 0 8px 0 0;
  background-color: ${props => props.theme.disabledColor};
  border-radius: 2px;
`;

interface FilledBarInterface {
  rating: number;
}

const FilledBar = styled.div<FilledBarInterface>`
  height: 100%;
  background-color: ${props => props.theme.primaryColor};
  border-radius: 2px;
  width: ${props => (props.rating / 5) * 100}%;
`;

export const Rating: React.FC <FilledBarInterface> = ({ rating }) => {
  return (
    <RatingBar>
      <FilledBar rating={rating} />
    </RatingBar>
  );
};
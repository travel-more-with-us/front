import React from 'react';
import styled from 'styled-components';
import star from '../../images/star.svg';
import starEmpty from '../../images/star-empty.svg';

const Block = styled.div`
  display: flex;
  gap: 2px;
`;

interface Props {
  count: number;
}

export const Stars: React.FC<Props> = ({ count }) => {
  const emptyStarsCount = 5 - count;
  const stars = Array.from({ length: count }, () => star);
  const emptyStars = Array.from({ length: emptyStarsCount }, () => starEmpty);

  return (
    <Block>
      {[...stars, ...emptyStars].map((el, index) => (
        <img key={Math.random().toString() + index.toString()} src={el} alt={`star-${index}`} />
      ))}
    </Block>
  );
};

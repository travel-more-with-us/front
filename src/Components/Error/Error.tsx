import React from 'react';
import { Container } from '../Layout/Container';

interface Props {
  error: string;
}

export const Error: React.FC <Props> = ({ error }) => {
  return (
    <Container>
      <h2>
        {error}
      </h2>
    </Container>
  );
};

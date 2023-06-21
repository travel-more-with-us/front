import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { Container } from '../Layout/Container';
import { Auth } from './Auth';

const StyledHeader = styled.header`
padding: 12px 0;
background: #fff;
`;

const Block = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;

@media (max-width: 768px) {
  justify-content: center;
}
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Block>
          <Logo />
          <Auth />
        </Block>
      </Container>
    </StyledHeader>
  );
};

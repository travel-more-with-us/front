import React from 'react';
import styled from 'styled-components';
import { Container } from '../Layout/Container';
import mainBg from '../../images/main-bg.png';
import { MainBlock } from '../Propositions/MainBlock';

const StyledMain = styled.main`
padding: 170px 0 180px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${mainBg});
background-size: cover;
background-repeat: no-repeat;

@media screen and (max-width: 768px) {
  padding: 130px 0 140px;
}
`;

const Header = styled.h1`
font-weight: 700;
font-size: 56px;
line-height: 120%;
color: #FFFFFF;
margin: 0;

@media screen and (max-width: 768px) {
  font-size: 44px;
  margin: 0 0 16px 0;
}
`;

const Description = styled.p`
font-weight: 700;
font-size: 24px;
line-height: 120%;
color: #FFFFFF;
`;

export const Main = () => {
  return (
    <>
      <StyledMain>
        <Container>
          <Header>
            Discover. Compare. Travel More!
          </Header>
          <Description>
            Streamline your travel planning with our
            <br />
            all-in-one booking service.
          </Description>
        </Container>
      </StyledMain>
      <MainBlock />
    </>
  );
};

import React from 'react';
import styled from 'styled-components';
import { Container } from '../Layout/Container';
import mainBg from '../../images/main-bg.png';
import { PropositionsBlock } from './PropositionsBlock';
import videoSource from '../../images/video-travel-more.mp4';

const StyledMain = styled.main`
padding: 170px 0 0;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
margin: 0 0 160px 0;

@media screen and (max-width: 768px) {
  padding: 130px 0 140px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${mainBg});
  background-size: cover;
  background-repeat: no-repeat;
}
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: 50%;
  object-fit: cover;
  z-index: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Header = styled.h1`
font-weight: 700;
font-size: 56px;
line-height: 120%;
color: #FFFFFF;
margin: 0;
position: relative;
z-index: 2;

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
position: relative;
z-index: 2;
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
          <VideoBackground autoPlay loop muted>
            <source src={videoSource} type="video/mp4" />
          </VideoBackground>
        </Container>
      </StyledMain>
      <PropositionsBlock />
    </>
  );
};

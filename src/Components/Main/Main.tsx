import React from 'react';
import styled from 'styled-components';
import { Container } from '../Layout/Container';
import mainBg from '../../images/main-bg.png';
import { PropositionsBlock } from './PropositionsBlock';
import videoSource from '../../images/video-travel-more.mp4';
import { Search } from './Search/Search';
import bali from '../../images/Bali.png';
import warshaw from '../../images/Warsaw.png';
import bangkok from '../../images/Bangkok.png';
import berlin from '../../images/Berlin.png';
import manchester from '../../images/Manchester.png';
import dubrovnik from '../../images/Dubrovnik.png';
import rio from '../../images/Rio de Janeiro.png';
import antalya from '../../images/Antalya.png';

const StyledMain = styled.main`
padding: 135px 0 0;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
margin: 0 0 185px 0;
position: relative;
height: 500px;
box-sizing: border-box;

@media screen and (max-width: 768px) {
  padding: 130px 0 140px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${mainBg});
  background-size: cover;
  background-repeat: no-repeat;
}
`;

const VideoBackground = styled.video<any>`
  position: absolute;
  top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: ${props => (props.loaded ? 1 : 0)};
  transition: opacity 0.5s ease;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Header = styled.h1`
font-weight: 700;
font-size: 56px;
line-height: 120%;
color: #FCFCFC;
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
  const [videoLoaded, setVideoLoaded] = React.useState(false);
  const places = [
    {
      img: antalya,
      country: 'Turkey',
      city: 'Antalya',
      rewievs: 184,
      rating: 5,
    },
    {
      img: bali,
      country: 'Indonesia',
      city: 'Bali',
      rewievs: 205,
      rating: 5,
    },
    {
      img: bangkok,
      country: 'Thailand',
      city: 'Bangkok',
      rewievs: 345,
      rating: 5,
    },
    {
      img: manchester,
      country: 'United Kingdom',
      city: 'Manchester',
      rewievs: 124,
      rating: 4,
    },
    {
      img: warshaw,
      country: 'Poland',
      city: 'Warsaw',
      rewievs: 65,
      rating: 5,
    },
    {
      img: berlin,
      country: 'Germany',
      city: 'Berlin',
      rewievs: 104,
      rating: 4,
    },
    {
      img: dubrovnik,
      country: 'Croatia',
      city: 'Dubrovnik',
      rewievs: 118,
      rating: 5,
    },
    {
      img: rio,
      country: 'Brazil',
      city: 'Rio de Janeiro',
      rewievs: 143,
      rating: 5,
    },
    {
      img: rio,
      country: 'Croatia',
      city: 'Split',
      rewievs: 143,
      rating: 5,
    },
  ];

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <>
      <StyledMain>
        <Container>
          <Search 
            places={places}
          />
          <Header>
            Discover. Compare. <br /> Travel More!
          </Header>
          <Description>
            Streamline your travel planning with our
            <br />
            all-in-one booking service.
          </Description>
          <VideoBackground 
            autoPlay 
            loop 
            muted
            loaded={videoLoaded}
            onLoadedMetadata={handleVideoLoad}
          >
            <source src={videoSource} type="video/mp4" />
          </VideoBackground>
        </Container>
      </StyledMain>
      <PropositionsBlock />
    </>
  );
};

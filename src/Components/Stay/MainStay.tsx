import React from 'react';
import styled from 'styled-components';
import { Container } from '../Layout/Container';
import { useNavigate, useParams } from 'react-router-dom';
import { MainInfo } from './MainInfo';
import { Images } from './Images';
import { AboutAndPrice } from './AboutAndPrice';
import { AmenitiesAndRewievs } from './AmenitiesAndRewievs';
import { GuestGuidlines } from './GuestGuidlines';
import { Back } from '../UI/Back';
import { stays } from '../Results/ResultsMain';
import { StayInterface } from '../../types';

const StyledMain = styled.main`
padding: 32px 0 80px;
background: #fff;
`;

export const MainStay = () => {
  const navigate = useNavigate();
  const { stayId }: any = useParams();
  console.log(stayId);
  const goBack = () => {
    navigate(-1);
  };

  const stay: StayInterface = stays.find((stay) => stay.id === +stayId) || stays[0];
  return (
    <StyledMain>
      <Container>
        <Back 
          name="Back to listing"
          goBack={goBack}
        />
        <MainInfo 
          stay={stay}
        />
        <Images 
          stay={stay} 
        />
        <AboutAndPrice 
          stay={stay}
        />
        <AmenitiesAndRewievs 
          stay={stay}
        />
        <GuestGuidlines 
          stay={stay}
        />
      </Container>
    </StyledMain>
  );
};

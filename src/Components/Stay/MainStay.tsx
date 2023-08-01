/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { baseUrl } from '../../api';
import { Loading } from '../Loading/Loading';
import { useFetching } from '../../hooksAndHelpers/useFetching';
import { Error } from '../Error/Error';

const StyledMain = styled.main`
padding: 32px 0 80px;
background: #fff;
`;

export const MainStay = () => {
  const navigate = useNavigate();
  const { stayId }: any = useParams();
  const [stay, stayLoading, stayError] = useFetching(baseUrl + `stays/${stayId}`);
  

  const goBack = () => {
    navigate(-1);
  };

  return (
    <StyledMain>
      <Container>
        <Back 
          name="Back to listing"
          goBack={goBack}
        />
        {stayLoading ? (
          <Loading />
        ) : (
          stayError ? (
            <Error
              error={`Can not load stay, ${stayError}`}
            />
          ) : (
            <>
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
              <GuestGuidlines />
            </>
          )
        )}
      </Container>
    </StyledMain>
  );
};

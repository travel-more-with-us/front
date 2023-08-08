import React from 'react';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { StateInterface } from '../../types/reduxTypes';
import { StayInterface } from '../../types';
import styled from 'styled-components';
import { ProfileStay } from './ProfileStay';
import { useNavigate } from 'react-router-dom';
import { Back } from '../UI/Back';

const Main = styled.main`
padding: 50px 0;
`;

const Stays = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`;

export const Profile = () => {
  const likedProperties = useSelector((state: StateInterface) => state.properties);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Main>
      <Container>
        <div>
          <Back 
            name="Back"
            goBack={goBack}
          />
          <h1>
            Properties you've liked
          </h1>
        </div>
        <div>
          {likedProperties.length === 0 ? (
            <h2>
              You have not liked any property yet
            </h2>
          ): (
            <Stays>
              {likedProperties.map((stay: StayInterface) => (
                <ProfileStay 
                  stay={stay}
                  key={stay.city}
                />
              ))}
            </Stays>
          )}

        </div>
      </Container>
    </Main>
  );
};

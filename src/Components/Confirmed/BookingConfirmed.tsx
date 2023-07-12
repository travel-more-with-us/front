import React from 'react';
import { Back } from '../UI/Back';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SeparatorHorizontal } from '../UI/SeparatorHorizontal';
import styled from 'styled-components';
import { Separator } from '../UI/Separator';
import { GuestsBlock } from './GuestsBlock';
import { QrcodeBlock } from './QrcodeBlock';
import { StayPersonalData } from './StayPersonalData';
import { StateInterface } from '../../types/reduxTypes';

const H1 = styled.h1`
color: ${props => props.theme.txtColor};
font-size: 32px;
font-weight: 700;
line-height: 120%;
margin: 0 0 24px 0;
`;

const Block = styled.div`
display: flex;
gap: 24px;
padding: 40px 0;

@media screen and (max-width: 768px) {
  flex-direction: column;
}
`;

const GuestInfo = styled.div`
width: calc((100% - 24px) / 2);

@media screen and (max-width: 768px) {
  width: 100%;
}
`;

const H2 = styled.h2`
color: ${props => props.theme.txtColor};
font-family: Nunito;
font-size: 24px;
font-weight: 700;
line-height: 120%;
margin: 0 0 16px 0;
`;

interface Props {
  price: number;
}

export const BookingConfirmed: React.FC <Props> = ({ price }) => {
  const navigate = useNavigate();
  const departure = useSelector((state: StateInterface) => state.departure);

  const goBack = () => {
    navigate('/');
  };
  return (
    <div>
      <Back 
        name='Back to homepage'
        goBack={goBack}
      />
      <H1>
        {`Your booking in ${departure.city}, ${departure.country} is confirmed`}
      </H1>
      <SeparatorHorizontal />
      <Block>
        <GuestInfo>
          <H2>
            Booking details
          </H2>
          <GuestsBlock 
            price={price}
          />
          <QrcodeBlock />
        </GuestInfo>
        <Separator />
        <StayPersonalData />
      </Block>
    </div>
  );
};

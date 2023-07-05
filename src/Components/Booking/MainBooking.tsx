import React from 'react';
import styled from 'styled-components';
import { Container } from '../Layout/Container';
import { Back } from '../UI/Back';
import { useNavigate, useParams } from 'react-router-dom';
import { InfoBlock } from './InfoBlock';
import { SeparatorHorizontal } from '../UI/SeparatorHorizontal';
import { TravelExtras } from './TravelExtras';
import { Payment } from './Payment';
import { stays } from '../Results/ResultsMain';
import { StayInterface } from '../../types';

const StyledBooking = styled.main`
  padding: 24px 0 56px;
`;

const MainBlock = styled.div`
display: flex;
gap: 24px;
margin: 0 0 56px 0;

@media screen and (max-width: 768px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

const ImgBlock = styled.div`
width: calc((100% - 24px) / 2);

@media screen and (max-width: 768px) {
  width: 100%;
}
`;

const Image = styled.img`
width: 100%;
border-radius: 8px;
height: 100%;

@media screen and (max-width: 1024px) {
  height: unset;
}
`;

export const MainBooking = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const { stayId }: any = useParams();

  const stay: any = stays.find((stay: StayInterface) => stay.id === +stayId);
  return (
    <StyledBooking>
      <Container>
        <Back 
          goBack={goBack}
          name={`Back to ${stay.name}`}
        />
        <MainBlock>
          <ImgBlock>
            <Image 
              src={stay.images[0]}
              alt="villa"
            />
          </ImgBlock>
          <InfoBlock 
            stay={stay}
          />
        </MainBlock>
        <SeparatorHorizontal />
        <TravelExtras />
        <SeparatorHorizontal />
        <Payment />
      </Container>
    </StyledBooking>
  );
};

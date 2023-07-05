import React from 'react';
import styled from 'styled-components';
import { Container } from '../Layout/Container';
import { Back } from '../UI/Back';
import { useNavigate, useParams } from 'react-router-dom';
import villa1 from '../../images/villa1.png';
import villa2 from '../../images/villa2.png';
import villa3 from '../../images/villa3.png';
import villa4 from '../../images/villa4.png';
import villa5 from '../../images/villa5.png';
import wifi from '../../images/wifi.svg';
import person from '../../images/person.png';
import { InfoBlock } from './InfoBlock';
import { SeparatorHorizontal } from '../UI/SeparatorHorizontal';
import { TravelExtras } from './TravelExtras';
import { Payment } from './Payment';
import { stays } from '../Results/ResultsMain';

const StyledBooking = styled.main`
  padding: 24px 0 56px;
`;

const MainBlock = styled.div`
display: flex;
gap: 24px;
margin: 0 0 56px 0;
`;

const ImgBlock = styled.div`
width: calc((100% - 24px) / 2);
`;

const Image = styled.img`
width: 100%;
border-radius: 8px;
height: 100%;
`;

export const MainBooking = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const { stayId }: any = useParams();

  const stay: any = stays.find((stay: any) => stay.id === +stayId);
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

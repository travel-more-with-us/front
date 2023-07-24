/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Container } from '../Layout/Container';
import { Back } from '../UI/Back';
import { useNavigate, useParams } from 'react-router-dom';
import { InfoBlock } from './InfoBlock';
import { SeparatorHorizontal } from '../UI/SeparatorHorizontal';
import { TravelExtras } from './TravelExtras';
import { Payment } from './Payment';
import { BookingConfirmed } from '../Confirmed/BookingConfirmed';
import { PaymentProvider } from '../../context/PaymentContext';
import { baseUrl } from '../../api';
import { useFetching } from '../../hooksAndHelpers/useFetching';
import { Loading } from '../Loading/Loading';

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

const Image = styled.img<any>`
width: 100%;
border-radius: 8px;
height: 100%;
opacity: ${props => (props.loaded ? 1 : 0)};
transition: opacity 0.5s ease-in-out;

@media screen and (max-width: 1024px) {
  height: unset;
}
`;

export const MainBooking = () => {
  const navigate = useNavigate();
  const [isBooked, setIsBooked] = React.useState(false);

  const goBack = () => {
    navigate(-1);
  };
  const { stayId }: any = useParams();

  const [stay, stayLoading, stayError] = useFetching(baseUrl + `stays/${stayId}`);
  const [images, imagesLoading, imagesError] = useFetching(baseUrl + `images?stayId=${stayId}`);

  const [loaded, setLoaded] = React.useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <PaymentProvider>
      <StyledBooking>
        <Container>
          {isBooked ? (
            <div>
              <BookingConfirmed 
                price={stay.price}
              />
            </div>
          ) : (
            <div>
              {!stayLoading && (
                <Back 
                  goBack={goBack}
                  name={`Back to ${stay.name}`}
                />
              )}
              <MainBlock>
                {imagesLoading ? (
                  <Loading />
                ) : (
                  <ImgBlock>
                    <Image 
                      src={baseUrl + images[0].url}
                      alt="villa"
                      loaded={loaded} 
                      onLoad={handleImageLoad}
                    />
                  </ImgBlock>
                )}
                {stayLoading ? (
                  <Loading />
                ) : (
                  <InfoBlock 
                    stay={stay}
                  />
                )}
              </MainBlock>
              <SeparatorHorizontal />
              <TravelExtras />
              <SeparatorHorizontal />
              <Payment 
                setIsBooked={setIsBooked}
              />
            </div>
          )}
        </Container>
      </StyledBooking>
    </PaymentProvider>
  );
};

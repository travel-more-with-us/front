/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { ButtonOutlined } from '../UI/ButtonOutlined';
import { StayInterface } from '../../types';
import axios from 'axios';
import { baseUrl } from '../../api';
import { Loading } from '../Loading/Loading';
import { useFetching } from '../../hooksAndHelpers/useFetching';
import { SliderPhotosModal } from './SliderPhotosModal';

const StyledImages = styled.div`
display: flex;
align-items: flex-start;
flex-wrap: wrap;
gap: 24px;
`;

const MainImage = styled.img<any>`
width: 496px;
height: 408px;
border-radius: 8px;
margin: 0 0 24px 0;
opacity: ${props => (props.loaded ? 1 : 0)};
transition: opacity 0.5s ease-in-out;

@media screen and (max-width: 768px) {
  width: 100%;
  height: auto;
}
`;

const MainButtons = styled.div`
display: flex;
gap: 24px;
`;

const SecondImages = styled.div`
display: flex;
flex-wrap: wrap;
gap: 24px;
max-width: 392px;

@media screen and (max-width: 768px) {
  width: 100%;
  max-width: unset;
  justify-content: space-around;
}
`;

const SmallImage = styled.img<any>`
width: 184px;
height: 192px;
border-radius: 8px;
opacity: ${props => (props.loaded ? 1 : 0)};
transition: opacity 0.5s ease-in-out;

@media screen and (max-width: 768px) {
  width: 100%;
}
`;

const SmallImageContainer = styled.div`
height: 192px;
`;

const MapContainer = styled.div`
  width: 288px;
  height: 408px;
  border-radius: 8px;
  overflow: hidden;

  @media screen and (max-width: 1290px) {
    width: 100%;

    iframe {
      width: 70%;
    }
  }

  @media screen and (max-width: 768px) {
    iframe {
      width: 100%;
    }
  }
`;

interface Props {
  stay: StayInterface;
}

export const Images: React.FC <Props> = ({ stay }) => {
  console.log(stay);
  const [loaded, setLoaded] = React.useState(false);
  const [images, imagesLoading, imagesError] = useFetching(`${baseUrl}images?stayId=${stay.id.toString()}`);
  const [popupOpen, setPopupOpen] = React.useState(false);

  
  const handleImageLoad = () => {
    setLoaded(true);
  };

  console.log(images);

  function openPopup() {
    setPopupOpen(true);
  }

  function closePopup() {
    setPopupOpen(false);
  }

  return (
    <StyledImages>
      <div>
        {imagesLoading ? (
          <Loading />
        ) : (
          <MainImage 
            src={baseUrl + images[0].url}
            alt="stay room"
            loaded={loaded} 
            onLoad={handleImageLoad}
          />
        )}
        <MainButtons>
          <ButtonOutlined onClick={openPopup}>
            See all {images && images.length} Photos
          </ButtonOutlined>
          <ButtonOutlined>
            Video
          </ButtonOutlined>
          <ButtonOutlined>
            3D tour
          </ButtonOutlined>
        </MainButtons>
        {popupOpen && (
          !imagesLoading && (
            <SliderPhotosModal 
              closePopup={closePopup}
              images={images}
            />
          )
        )}
      </div>
      {imagesLoading ? (
        <Loading />
      ) :  (
        <SecondImages>
          {images.slice(1, 5).map((image: any) => (
            <SmallImageContainer key={image.id}>
              <SmallImage 
                src={baseUrl + image.url}
                alt="villa some object"
                loaded={loaded} 
                onLoad={handleImageLoad}
              />
            </SmallImageContainer>
          ))}
        </SecondImages>
      )}
      <MapContainer dangerouslySetInnerHTML={{ __html: stay.onMap }} />
    </StyledImages>
  );
};

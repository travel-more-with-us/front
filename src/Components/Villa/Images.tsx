import React from 'react';
import styled from 'styled-components';
import { ButtonOutlined } from '../UI/ButtonOutlined';
import { VillaInterface } from '../../types';

const StyledImages = styled.div`
display: flex;
align-items: flex-start;
flex-wrap: wrap;
gap: 24px;
`;

const MainImage = styled.img`
width: 496px;
height: 408px;
border-radius: 8px;
margin: 0 0 24px 0;

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

const SmallImage = styled.img`
width: 184px;
height: 192px;
border-radius: 8px;

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
  villa: VillaInterface;
}

export const Images: React.FC <Props> = ({ villa }) => {
  const map: string = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.861757794266!2d16.441164876070015!3d43.50521937110958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355f87dba3aab3%3A0x4ad5decc918fac82!2sApartments%20Antica%20-%20Split!5e0!3m2!1suk!2sua!4v1687363745573!5m2!1suk!2sua"  height="408" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  return (
    <StyledImages>
      <div>
        <MainImage 
          src={villa.images[0]}
          alt="villa room"
        />
        <MainButtons>
          <ButtonOutlined>
            See all 20 Photos
          </ButtonOutlined>
          <ButtonOutlined>
            Video
          </ButtonOutlined>
          <ButtonOutlined>
            3D tour
          </ButtonOutlined>
        </MainButtons>
      </div>
      <SecondImages>
        {villa.images.slice(1).map((image: string) => (
          <SmallImageContainer key={image}>
            <SmallImage 
              src={image}
              alt="villa some object"
            />
          </SmallImageContainer>
        ))}
      </SecondImages>
      <MapContainer dangerouslySetInnerHTML={{ __html: map }} />
    </StyledImages>
  );
};

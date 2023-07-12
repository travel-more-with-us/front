import React from 'react';
import styled from 'styled-components';
import { StayInfoBlock } from './StayInfoBlock';
import { StayInterface } from '../../types';

const StyledVilla = styled.div`
border-radius: 16px;
border: 1px solid ${props => props.theme.disabledColor};
background: #FFF;
padding: 24px;
box-sizing: border-box;
display: flex;
gap: 24px;

@media screen and (max-width: 768px) {
  flex-direction: column;
}
`;

const Image = styled.img<any>`
max-width: 288px;
width: 100%;
height: 100%;
border-radius: 8px;
opacity: ${props => (props.loaded ? 1 : 0)};
transition: opacity 0.5s ease-in-out;

@media screen and (max-width: 1024px) {
  height: unset;
}

@media screen and (max-width: 768px) {
  max-width: unset;
}
`;

const ImageBlock = styled.div`
width: calc((100% - 24px) / 3);

@media screen and (max-width: 768px) {
  width: 100%;
  max-width: unset;
}
`;

interface Props {
  stay: StayInterface;
  duration: number;
  adults: number;
}

export const Stay: React.FC <Props> = ({ stay, duration, adults }) => {
  const [loaded, setLoaded] = React.useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };
  return (
    <StyledVilla>
      <ImageBlock>
        <Image 
          src={stay.images[0]}
          alt="villa"
          loaded={loaded} 
          onLoad={handleImageLoad}
        />
      </ImageBlock>
      <StayInfoBlock 
        stay={stay}
        duration={duration}
        adults={adults}
      />
    </StyledVilla>
  );
};


/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';
import close from '../../images/close.svg';
import { SliderComponent } from './Slider';

const StyledPopup = styled.div`
position: absolute;
width: 90%;
height: 90vh;
left: 50%;
top: 124px;
transform: translate(-50%, 0);
background: #FFFFFF;
border-radius: 16px;
padding: 20px 0;
color: #000000;
z-index: 4;

@media screen and (max-width: 768px) {
  width: 90%;
  max-width: 720px;
  height: auto;
}
`;

const Close = styled.button`
border: none;
outline: none;
position: absolute;
right: 24px;
top: 20px;
background: transparent;
cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 30, 30, 0.4);
  z-index: 4;
`;

export const SliderPhotosModal: React.FC <any> = ({ closePopup, images }) => {
  const popupRef = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      closePopup();
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Overlay />
      <StyledPopup ref={popupRef}>
        <Close onClick={closePopup}>
          <img
            src={close}
            alt=""
          />
        </Close>
        <SliderComponent
          images={images}
        />
      </StyledPopup>
    </>
  );
};

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';
import close from '../../images/close.svg';
import { FormSignIn } from './Form/FormSignIn';
import { PopupConext } from './Auth';

const StyledPopup = styled.div`
position: absolute;
width: 648px;
height: 685px;
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

const Header = styled.p`
border-bottom: 1px solid #E6E7E8;
padding-bottom: 18px;
font-weight: 700;
font-size: 20px;
line-height: 150%;
color: #000000;
text-align: center;
margin: 0;
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

export const PopupSignIn = () => {
  const popupRef = React.useRef<HTMLDivElement>(null);
  const { closePopupSignIn } = React.useContext(PopupConext);

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      closePopupSignIn();
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
        <Header>
          Sign in
        </Header>
        <Close onClick={closePopupSignIn}>
          <img
            src={close}
            alt=""
          />
        </Close>
        <FormSignIn />
      </StyledPopup>
    </>
  );
};

import React from 'react';
import styled from 'styled-components';
import { MySelect } from '../UI/MySelect';
import earth from '../../images/earth.svg';
import { MyButtonMedium } from '../UI/MyButtonMedium';
import { PopupSignUp } from './PopupSignUp';
import { PopupSignIn } from './PopupSignIn';

const StyledAuth = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
gap: 40px;
`;

const Languages = styled.div`
display: flex;
align-items: center;
`;

export const Auth = () => {
  const currencies = [
    { label: 'English ● $ USD' },
    { label: 'English ● € EUR' },
    { label: 'Ukrainian ● ₴ UAH' },
  ];
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenSignIn, setOpenSignIn] = React.useState(false);

  function openPopup() {
    setIsOpen(true);
  }

  function closePopup() {
    setIsOpen(false);
  }

  function openPopupSignIn() {
    setOpenSignIn(true);
  }

  function closePopupSignIn() {
    setOpenSignIn(false);
  }

  return (
    <StyledAuth>
      <Languages>
        <img src={earth} alt="" />
        <MySelect
          options={currencies}
          defaultField="English"
          arrow={false}
        />
      </Languages>
      <p>
        List your property
      </p>
      <MyButtonMedium onClick={openPopupSignIn}>
        Sign in
      </MyButtonMedium>
      <MyButtonMedium onClick={openPopup}>
        Sign up
      </MyButtonMedium>
      {isOpen && (
        <PopupSignUp
          closePopup={closePopup}
        />
      )}
      {isOpenSignIn && (
        <PopupSignIn 
          closePopup={closePopupSignIn}
          openSignUp={openPopup}
        />
      )}
    </StyledAuth>
  );
};

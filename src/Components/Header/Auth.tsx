import React from 'react';
import styled from 'styled-components';
import { MySelect } from '../UI/MySelect';
import earth from '../../images/earth.svg';
import { MyButtonMedium } from '../UI/MyButtonMedium';
import { PopupSignUp } from './PopupSignUp';
import { PopupSignIn } from './PopupSignIn';
import { usePopup } from '../../hooks/usePopup';

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

interface PopupContextProps {
  closePopupSignUp: () => void;
  closePopupSignIn: () => void;
  isOpenSignIn: boolean;
  isOpenSignUp: boolean;
  openPopupSignIn: () => void;
  openPopupSignUp: () => void;
}

export const PopupConext = React.createContext<PopupContextProps>({
  closePopupSignUp: () => {},
  closePopupSignIn: () => {},
  isOpenSignIn: false,
  isOpenSignUp: false,
  openPopupSignIn: () => {},
  openPopupSignUp: () => {},
});

export const Auth = () => {
  const currencies = [
    { label: 'English ● $ USD' },
    { label: 'English ● € EUR' },
    { label: 'Ukrainian ● ₴ UAH' },
  ];
  const {isOpenSignIn, isOpenSignUp, openPopupSignIn, openPopupSignUp, closePopupSignIn, closePopupSignUp } = usePopup();
  const popupConextValue = {isOpenSignIn, isOpenSignUp, openPopupSignIn, openPopupSignUp, closePopupSignIn, closePopupSignUp };

  return (
    <StyledAuth>
      <PopupConext.Provider value={popupConextValue}>
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
        <MyButtonMedium onClick={openPopupSignUp}>
          Sign up
        </MyButtonMedium>
        {isOpenSignUp && (
          <PopupSignUp />
        )}
        {isOpenSignIn && (
          <PopupSignIn />
        )}
      </PopupConext.Provider>
    </StyledAuth>
  );
};

import React from 'react';
import styled from 'styled-components';
import { MySelect } from '../UI/MySelect';
import earth from '../../images/earth.svg';
import { MyButtonMedium } from '../UI/MyButtonMedium';
import { PopupSignUp } from './PopupSignUp';
import { PopupSignIn } from './PopupSignIn';
import { usePopup } from '../../hooksAndHelpers/usePopup';
import { useDispatch, useSelector } from 'react-redux';
import { StateInterface } from '../../types/reduxTypes';
import { Link } from 'react-router-dom';
import { ButtonOutlined } from '../UI/ButtonOutlined';
import { updateAuth } from '../../store/actions';

const StyledAuth = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
gap: 40px;

@media screen and (max-width: 768px) {
  flex-direction: column;
}
`;

const StyledButton = styled(Link)`
  background: #fff;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 12px 16px;
  border: 2px solid ${props => props.theme.primaryColor};
  font-family: Nunito;
  text-decoration: none;

  &:hover {
    border: 2px solid ${props => props.theme.focusedColor};
    background: ${props => props.theme.hoverColor};
  }
`;

const Languages = styled.div`
display: flex;
align-items: center;
`;

const Buttons = styled.div`
display: flex;
gap: 24px;
flex-wrap: wrap;
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
  const isAuth = useSelector((state: StateInterface) => state.auth);
  const dispatch = useDispatch();

  function logOut() {
    dispatch(updateAuth(false));
  }

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
        {!isAuth && (
          <Buttons>
            <MyButtonMedium onClick={openPopupSignIn}>
              Sign in
            </MyButtonMedium>
            <MyButtonMedium onClick={openPopupSignUp}>
              Sign up
            </MyButtonMedium>
          </Buttons>
        )}
        {isAuth && (
          <Buttons>
            <StyledButton 
              to="/profile"
            >
              My Profile
            </StyledButton>
            <ButtonOutlined 
              onClick={logOut}
            >
              Log out
            </ButtonOutlined>
          </Buttons>
        )}
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

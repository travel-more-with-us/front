/* eslint-disable no-console */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MyInput } from '../../UI/MyInput';
import { MyButtonLarge } from '../../UI/MyButtonLarge';
import { PrivacyPolice } from './PrivacyPolice';
import { ForgotPassword } from './ForgotPassword';
import { Separator } from './Separator';
import { ContinueWith } from './ContinueWith';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 76px;

  @media screen and (max-width: 768px) {
    padding: 0 26px;
  }
`;

const Welcome = styled.h4`
font-weight: 700;
font-size: 32px;
line-height: 120%;
color: #000000;
margin: 0 0 24px 0;
text-align: center;
`;

const ErrorMessage = styled.div`
margin: 0 0 10px 0;
color: red;
`;

interface Props {
  marginbottom: string;
}

const StyledMyInput = styled(MyInput)<Props>`
margin-bottom: ${props => props.marginbottom || '10px'};
`;

export const Form = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [passwordDirty, setPasswordDirty] = React.useState(false);
  const [buttonAvailable, setButtonAvailable] = React.useState(false);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const isValidEmail = (str: string) => {
    return emailRegex.test(str);
  };

  function validatePassword(str: string) {
    const minLength = 6;
    const maxLength = 20;
    const hasUppercase = /[A-Z]/.test(str);
    const hasLowercase = /[a-z]/.test(str);
    const hasNumber = /[0-9]/.test(str);
    const hasSpecialChar = /[!@#$%^&*()]/.test(str);
    const forbiddenValues = ['password', '123456', 'qwerty'];

    if (str.length < minLength || str.length > maxLength) {
      return 'Password must be between 6 and 20 characters long';
    }

    if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
      return 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    }

    if (forbiddenValues.includes(str)) {
      return 'Password is not allowed';
    }

    return '';
  }

  React.useEffect(() => {
    const isValid = isValidEmail(email);

    if (!isValid) {
      setEmailError('Email is not valid, try again');
    } else {
      setEmailError('');
    }
  }, [email]);

  React.useEffect(() => {
    const error = validatePassword(password);

    if (error) {
      setPasswordError(error);
    } else {
      setPasswordError('');
    }
  }, [password]);

  function emailHandler(str: string) {
    setEmail(str);
  }

  function passwordHandler(str: string) {
    setPassword(str);
  }

  useEffect(() => {
    if (emailDirty && passwordDirty) {
      if (emailError && passwordError) {
        setButtonAvailable(false);
      } else {
        setButtonAvailable(true);
      }
    }
  }, [email, password, emailError, passwordError, passwordDirty, emailDirty]);

  function blurHandler(e: any) {
    switch (e.target.type) {
    case 'email':
      setEmailDirty(true);
      break;
    case 'password':
      setPasswordDirty(true);
      break;
    default: break;
    }
  }

  function submitForm() {
    console.log('submit form');
  }

  return (
    <StyledForm onSubmit={(e) => {
      e.preventDefault();
      submitForm();
    }}
    >
      <Welcome>
        Welcome to TravelMore!
      </Welcome>
      <StyledMyInput
        value={email}
        onChange={emailHandler}
        onBlur={blurHandler}
        placeholder="Email"
        type="email"
        marginbottom="10px"
      />
      {emailDirty && emailError && (
        <ErrorMessage>
          {emailError}
        </ErrorMessage>
      )}
      <StyledMyInput
        value={password}
        onChange={passwordHandler}
        onBlur={blurHandler}
        placeholder="Password"
        type="password"
        marginbottom="8px"
      />
      {passwordDirty && passwordError && (
        <ErrorMessage>
          {passwordError}
        </ErrorMessage>
      )}
      <PrivacyPolice />
      <MyButtonLarge onClick={() => {}} disabled={!buttonAvailable}>
        Continue
      </MyButtonLarge>
      <ForgotPassword />
      <Separator />
      <ContinueWith />
    </StyledForm>
  );
};

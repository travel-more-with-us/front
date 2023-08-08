/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import { MyInput } from '../../UI/MyInput';
import { MyButtonLarge } from '../../UI/MyButtonLarge';
import { PrivacyPolice } from './PrivacyPolice';
import { ForgotPassword } from './ForgotPassword';
import { FormSeparator } from '../../UI/FormSeparator';
import { ContinueWith } from './ContinueWith';
import { useInput } from '../../../hooksAndHelpers/useInput';
import { useDispatch } from 'react-redux';
import { updateAuth } from '../../../store/actions';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 76px;
  position: relative;
  z-index: 9999;

  @media screen and (max-width: 768px) {
    padding: 0 26px;
  }
`;

const Welcome = styled.h4`
font-weight: 700;
font-size: 32px;
line-height: 120%;
color: #000000;
margin: 24px 0px 24px;
text-align: center;
`;

const ErrorMessage = styled.div`
margin: 0 0 10px 0;
color: ${props => props.theme.errorColor};
`;

interface MyInputProps {
  marginbottom: string;
  error: string;
  success: string;
}

const StyledMyInput = styled(MyInput)<MyInputProps>`
  margin-bottom: ${props => props.marginbottom || '10px'};
  background: ${props => {
    if (props.error) {
      return props.theme.errorbg;
    } else if (props.success) {
      return props.theme.successBg;
    } else {
      return 'inherit';
    }
  }};
  border-color: ${props => {
    if (props.error) {
      return props.theme.errorColor;
    } else if (props.success) {
      return props.theme.success;
    } else {
      return 'inherit';
    }
  }};
  border-width: 2px;
`;

interface Props {
  closePopupSignIn: () => void;
}

export const FormSignIn: React.FC <Props> = ({ closePopupSignIn }) => {
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [passwordDirty, setPasswordDirty] = React.useState(false);
  const [buttonAvailable, setButtonAvailable] = React.useState(false);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const email = useInput('');
  const password = useInput('');
  const dispatch = useDispatch();

  const isValidEmail = (str: string) => {
    return emailRegex.test(str);
  };

  React.useEffect(() => {
    const isValid = isValidEmail(email.value);

    if (!isValid) {
      setEmailError('Email is not valid, try again');
    } else {
      setEmailError('');
    }
  }, [email.value]);

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
      return 'Password is not allowed, because is too easy';
    }

    return '';
  }

  React.useEffect(() => {
    if (emailDirty && emailError) {
      setButtonAvailable(false);
    } else {
      setButtonAvailable(true);
    }
  }, [email.value, password.value, emailError, passwordError, passwordDirty, emailDirty]);

  function blurHandler(e: React.FocusEvent<HTMLInputElement>) {
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
    const passwordError = validatePassword(password.value);

    if (!passwordError) {
      dispatch(updateAuth(true));
      closePopupSignIn();
    } else {
      setPasswordError(passwordError);
    }
    
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
        value={email.value}
        onChange={email.onChange}
        onBlur={blurHandler}
        placeholder="Email"
        type="email"
        marginbottom="10px"
        error={emailDirty ? emailError: ''}
        success={emailDirty && emailError === '' ? 'true': ''}
      />
      {emailDirty && emailError && (
        <ErrorMessage>
          {emailError}
        </ErrorMessage>
      )}
      <StyledMyInput
        value={password.value}
        onChange={password.onChange}
        onBlur={blurHandler}
        placeholder="Password"
        type="password"
        marginbottom="8px"
        error={passwordDirty ? passwordError : ''}
        success={passwordDirty && passwordError === '' ? 'true': ''}
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
      <FormSeparator />
      <ContinueWith />
    </StyledForm>
  );
};

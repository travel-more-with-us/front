/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import { MyInput } from '../../UI/MyInput';
import { MyButtonLarge } from '../../UI/MyButtonLarge';
import { PrivacyPolice } from './PrivacyPolice';
import { FormSeparator } from '../../UI/FormSeparator';
import { ContinueWith } from './ContinueWith';
import { useSignUp } from '../../../hooksAndHelpers/useSignUp';

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

interface Props {
  marginbottom: string;
  error: string;
  success: string;
}

const StyledMyInput = styled(MyInput)<Props>`
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

const MarginSeparator = styled.div`
margin: 35px 35px 0;
`;

export const Form = () => {
  const {
    email,
    password,
    confirmPassword,
    passwordDirty,
    passwordError,
    confirmPasswordDirty,
    confirmPasswordError,
    emailDirty,
    emailError,
    blurHandler,
    buttonAvailable

  } = useSignUp();

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
        value={email.value}
        onChange={email.onChange}
        onBlur={blurHandler}
        name="email"
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
        name="password"
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
      <StyledMyInput
        value={confirmPassword.value}
        onChange={confirmPassword.onChange}
        name="confirm"
        onBlur={blurHandler}
        placeholder="Confirm password"
        type="password"
        marginbottom="8px"
        error={confirmPasswordDirty ? confirmPasswordError : ''}
        success={confirmPasswordDirty && confirmPasswordError === '' ? 'true': ''}
      />
      {confirmPasswordDirty && confirmPasswordError && (
        <ErrorMessage>
          {confirmPasswordError}
        </ErrorMessage>
      )}
      <PrivacyPolice />
      <MyButtonLarge onClick={() => {}} disabled={!buttonAvailable}>
        Continue
      </MyButtonLarge>
      <MarginSeparator>
        <FormSeparator />
      </MarginSeparator>
      <ContinueWith />
    </StyledForm>
  );
};

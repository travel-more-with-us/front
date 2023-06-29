import React from 'react';
import { useInput } from './useInput';

export const useSignUp = () => {
  const email = useInput('');
  const password = useInput('');
  const confirmPassword = useInput('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [passwordDirty, setPasswordDirty] = React.useState(false);
  const [buttonAvailable, setButtonAvailable] = React.useState(false);
  const [confirmPasswordDirty, setConfirmPasswordDirty] = React.useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = React.useState('');
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

  function checkPasswordsAreEqual() {
    const error = validatePassword(confirmPassword.value);
    if (error) {
      setConfirmPasswordError(error);
      return;
    } else {
      setConfirmPasswordError('');
    }

    if (password.value === confirmPassword.value && password.value !== '') {
      setConfirmPasswordError('');
      setConfirmPasswordDirty(true);
    } else {
      setConfirmPasswordError('Passwords are not equal, try again');
    }
  }

  React.useEffect(() => {
    const isValid = isValidEmail(email.value);

    if (!isValid) {
      setEmailError('Email is not valid, try again');
    } else {
      setEmailError('');
    }
  }, [email.value]);

  React.useEffect(() => {
    const error = validatePassword(password.value);

    if (error) {
      setPasswordError(error);
    } else {
      setPasswordError('');
    }
  }, [password.value]);

  React.useEffect(() => {
    checkPasswordsAreEqual();
  }, [confirmPassword.value]);

  React.useEffect(() => {
    if (emailDirty && passwordDirty && confirmPasswordDirty) {
      if (emailError || passwordError || confirmPasswordError) {
        setButtonAvailable(false);
      } else {
        setButtonAvailable(true);
      }
    }
  }, [email, password, confirmPassword, emailError, passwordError, passwordDirty, emailDirty, confirmPasswordError, confirmPasswordDirty]);

  const blurHandler = React.useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
    case 'email':
      setEmailDirty(true);
      break;
    case 'password':
      setPasswordDirty(true);
      break;
    case 'confirm':
      setConfirmPasswordDirty(true);
      break;
    default: break;
    }
  }, []);

  return {
    email,
    password,
    confirmPassword,
    blurHandler,
    emailDirty,
    emailError,
    passwordDirty,
    passwordError,
    confirmPasswordDirty,
    confirmPasswordError,
    buttonAvailable
  };
};
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useInput } from './useInput';

export const usePayment = () => {
  const fullname = useInput('');
  const email = useInput('');
  const phone = useInput('');
  const street = useInput('');
  const zip = useInput('');
  const country = useInput('');
  const cardHolderName = useInput('');
  const cardNumber = useInput('');
  const expiration = useInput('');
  const cvv = useInput('');
  const [fullnameError, setFullnameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');
  const [fullnameDirty, setFullnameDirty] = React.useState(false);
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [phoneDirty, setPhoneDirty] = React.useState(false);
  const [streetError, setStreetError] = React.useState('');
  const [streetDirty, setStreetDirty] = React.useState(false);
  const [zipError, setZipError] = React.useState('');
  const [zipDirty, setZipDirty] = React.useState(false);
  const [countryError, setCountryError] = React.useState('');
  const [countryDirty, setCountryDirty] = React.useState(false);
  const [cardHolderError, setCardHolderError] = React.useState('');
  const [cardHolderDirty, setCardHolderDirty] = React.useState(false);
  const [cardNumberError, setCardNumberError] = React.useState('');
  const [cardNumberDirty, setCardNumberDirty] = React.useState(false);
  const [expirationError, setExpirationError] = React.useState('');
  const [expirationDirty, setExpirationDirty] = React.useState(false);
  const [cvvError, setCvvError] = React.useState('');
  const [cvvDirty, setCvvDirty] = React.useState(false);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const phoneNumberRegex = /^(\+?3?8)?0\d{9}$/;
  const cardNumberRegex = /^[0-9]{16}$/;
  const expirationRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const cvvRegex = /^[0-9]{3,4}$/;

  const isValidEmail = (str: string) => {
    return emailRegex.test(str);
  };

  const isValidPhone = (str: string) => {
    return phoneNumberRegex.test(str);
  };

  const isValidCardNumber = (str: string) => {
    return cardNumberRegex.test(str);
  };

  const isValidExpiration = (str: string) => {
    return expirationRegex.test(str);
  };

  const isValidCvv = (str: string) => {
    return cvvRegex.test(str);
  };

  React.useEffect(() => {
    const isValid = isValidEmail(email.value);

    if (!isValid) {
      setEmailError('Email is not valid, try again');
    } else {
      setEmailError('');
    }
  }, [email.value]);

  React.useEffect(() => {
    if (!fullname.value) {
      setFullnameError('Please, enter your fullname');
    } else {
      setFullnameError('');
    }
  }, [fullname.value]);

  React.useEffect(() => {
    const isValid = isValidPhone(phone.value);

    if (!isValid) {
      setPhoneError('Phone is not valid, try again');
    } else {
      setPhoneError('');
    }
  }, [phone.value]);

  React.useEffect(() => {
    if (!street.value) {
      setStreetError('Please, enter your street');
    } else {
      setStreetError('');
    }
  }, [street.value]);

  React.useEffect(() => {
    if (!zip.value) {
      setZipError('Please, enter your zip');
    } else {
      setZipError('');
    }
  }, [zip.value]);

  React.useEffect(() => {
    if (!country.value) {
      setCountryError('Please, enter your country');
    } else {
      setCountryError('');
    }
  }, [country.value]);

  React.useEffect(() => {
    if (!cardHolderName.value) {
      setCardHolderError('Please, enter your name');
    } else {
      setCardHolderError('');
    }
  }, [cardHolderName.value]);

  React.useEffect(() => {
    const isValid = isValidCardNumber(cardNumber.value);
    if (!isValid) {
      setCardNumberError('Card number is not valid');
    } else {
      setCardNumberError('');
    }
  }, [cardNumber.value]);

  React.useEffect(() => {
    const isValid = isValidExpiration(expiration.value);
    if (!isValid) {
      setExpirationError('Expiration date is not valid');
    } else {
      setExpirationError('');
    }
  }, [expiration.value]);

  React.useEffect(() => {
    const isValid = isValidCvv(cvv.value);
    if (!isValid) {
      setCvvError('Cvv is not valid');
    } else {
      setCvvError('');
    }
  }, [cvv.value]);

  const blurHandler = React.useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
    case 'email':
      setEmailDirty(true);
      break;
    case 'phone':
      setPhoneDirty(true);
      break;
    case 'fullname':
      setFullnameDirty(true);
      break;
    case 'street':
      setStreetDirty(true);
      break;
    case 'zip':
      setZipDirty(true);
      break;
    case 'country':
      setCountryDirty(true);
      break;
    case 'cardholderName':
      setCardHolderDirty(true);
      break;
    case 'cardNumber':
      setCardNumberDirty(true);
      break;
    case 'expiration':
      setExpirationDirty(true);
      break;
    case 'cvv':
      setCvvDirty(true);
      break;
    default: break;
    }
  }, []);

  return {
    blurHandler,
    emailError,
    emailDirty,
    phoneError,
    phoneDirty,
    fullnameError,
    fullnameDirty,
    streetError,
    streetDirty,
    zipError,
    zipDirty,
    countryError,
    countryDirty,
    cardHolderError,
    cardHolderDirty,
    cardNumberError,
    cardNumberDirty,
    expirationError,
    expirationDirty,
    cvvError,
    cvvDirty,
    email,
    fullname,
    phone,
    street,
    country,
    cardHolderName,
    cardNumber,
    expiration,
    cvv,
    zip
  };
};
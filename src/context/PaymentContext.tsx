import React from 'react';
import { usePayment } from '../hooksAndHelpers/usePayment';

export const PaymentContext = React.createContext<any>({});

interface Props {
  children: React.ReactNode;
}

export const PaymentProvider: React.FC <Props> = ({ children }) => {
  const {
    email,
    fullname,
    phone,
    street,
    country,
    zip,
    cardHolderName,
    cardNumber,
    expiration,
    cvv,
    emailError,
    emailDirty,
    fullnameDirty,
    fullnameError,
    cvvDirty,
    cvvError,
    streetDirty,
    streetError,
    countryDirty,
    countryError,
    cardHolderDirty,
    cardHolderError,
    cardNumberDirty,
    cardNumberError,
    expirationDirty,
    expirationError,
    phoneDirty,
    phoneError,
    zipDirty,
    zipError,
    blurHandler
  } = usePayment();

  const contextValue = {
    email,
    fullname,
    phone,
    street,
    country,
    zip,
    cardHolderName,
    cardNumber,
    expiration,
    cvv,
    emailError,
    emailDirty,
    fullnameDirty,
    fullnameError,
    cvvDirty,
    cvvError,
    streetDirty,
    streetError,
    countryDirty,
    countryError,
    cardHolderDirty,
    cardHolderError,
    cardNumberDirty,
    cardNumberError,
    expirationDirty,
    expirationError,
    phoneDirty,
    phoneError,
    zipDirty,
    zipError,
    blurHandler
  };

  return (
    <PaymentContext.Provider value={contextValue}>
      {children}
    </PaymentContext.Provider>
  );
};

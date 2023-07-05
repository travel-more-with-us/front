import React from 'react';

export const usePopup = () => {
  const [isOpenSignUp, setIsOpenSignUp] = React.useState(false);
  const [isOpenSignIn, setOpenSignIn] = React.useState(false);

  function openPopupSignUp() {
    setIsOpenSignUp(true);
  }

  function closePopupSignUp() {
    setIsOpenSignUp(false);
  }

  function openPopupSignIn() {
    setOpenSignIn(true);
  }

  function closePopupSignIn() {
    setOpenSignIn(false);
  }

  return {
    openPopupSignIn,
    closePopupSignIn,
    openPopupSignUp,
    closePopupSignUp,
    isOpenSignIn,
    isOpenSignUp
  };
};
import React from 'react';
import styled from 'styled-components';
import { MySelect } from '../UI/MySelect';
import earth from '../../images/earth.svg';
import { MyButtonMedium } from '../UI/MyButtonMedium';
import { Popup } from './Popup';

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
  const languages = [
    'English',
    'Ukrainian',
  ];
  const [isOpen, setIsOpen] = React.useState(false);

  function openPopup() {
    setIsOpen(true);
  }

  function closePopup() {
    setIsOpen(false);
  }

  return (
    <StyledAuth>
      <Languages>
        <img src={earth} alt="" />
        <MySelect
          options={languages}
        />
      </Languages>
      <p>
        List your property
      </p>
      <MyButtonMedium onClick={openPopup}>
        Sign in
      </MyButtonMedium>
      {isOpen && (
        <Popup
          closePopup={closePopup}
        />
      )}
    </StyledAuth>
  );
};

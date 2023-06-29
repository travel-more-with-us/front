import React from 'react';
import styled from 'styled-components';
import { FormLink } from '../../UI/FormLink';
import { PopupConext } from '../Auth';

const Forgot = styled.p`
text-align: left;
justify-self: flex-start;
margin: 16px 0 4px 0;
color: #2149C1;
font-weight: 600;
`;

const CreateAccount = styled.div`
color: ${props => props.theme.txtFormColor};
margin: 0 0 35px 0;
display: flex;
`;

export const ForgotPassword = () => {
  const { openPopupSignUp, closePopupSignIn } = React.useContext(PopupConext);
  return (
    <>
      <Forgot>
        Forgot password?
      </Forgot>
      <CreateAccount>
        <span>Don’t have an account?</span>
        <FormLink
          color="#2149C1"
          onClick={() => {
            openPopupSignUp();
            closePopupSignIn();
          }}
        >
          Create account
        </FormLink>
      </CreateAccount>
    </>
  );
};

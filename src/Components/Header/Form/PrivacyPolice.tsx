import React from 'react';
import styled from 'styled-components';
import { FormLink } from '../../UI/FormLink';

const Text = styled.div`
margin: 0 0 24px 0;
`;

const Span = styled.span`
color: ${props => props.theme.txtFormColor};
`;

export const PrivacyPolice = () => {
  return (
    <Text>
      <Span>
        We’ll call or text you to confirm your number.
        Standard message and data rates apply.
      </Span>
      <FormLink
        href="/privacy"
        color="#14142A"
      >
        Privacy Policy.
      </FormLink>
    </Text>
  );
};

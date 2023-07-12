import React from 'react';
import styled from 'styled-components';
import { StayPersonalDataItem } from './StayPersonalDataItem';

const StyledOPersonalData = styled.div`
width: calc((100% - 24px) / 2);
`;

const H3 = styled.h3`
color: ${props => props.theme.txtColor};
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 120%;
margin: 0 0 16px 0;
`;

const BlocksContainer = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`;

const Block = styled.div`
display: flex;
gap: 16px;
`;

const Description = styled.div`
color: ${props => props.theme.txtColor};
font-size: 16px;
font-weight: 600;
line-height: 150%;
`;

export const StayPersonalData = () => {
  const owner = [
    {
      title: 'Name',
      value: 'Ivan Petrovich'
    },
    {
      title: 'Phone number',
      value: '+385 91 234 5678'
    },
    {
      title: 'Email',
      value: 'ivanpetrovich@gmail.com'
    }
  ];
  const manager = [
    {
      title: 'Name',
      value: 'Anna Kovach'
    },
    {
      title: 'Phone number',
      value: '+385 91 234 5678'
    },
    {
      title: 'Email',
      value: 'annakovac@gmail.com'
    }
  ];
  const customerSupport = [
    {
      title: 'Phone number',
      value: '+385 91 234 5678'
    },
    {
      title: 'Email',
      value: 'support@gmail.com'
    }
  ];

  return (
    <StyledOPersonalData>
      <H3>
        Contact property
      </H3>
      <BlocksContainer>
        <Block>
          <StayPersonalDataItem 
            array={owner}
            title="owner:"
          />
          <StayPersonalDataItem 
            array={manager}
            title="manager:"
          />
        </Block>
        <Block>
          <StayPersonalDataItem 
            array={customerSupport}
            title="customer support:"
          />
          <div>
          </div>
        </Block>
        <Description>
          The details of your booking have also been sent to your email. Please check your mailbox, including the "Spam" or "Junk" folder, if you did not find the email in your primary inbox.
          <br />
          <br />
          If you have any questions or need further information, please contact our customer support team using the provided contact details.
        </Description>
      </BlocksContainer>
    </StyledOPersonalData>
  );
};

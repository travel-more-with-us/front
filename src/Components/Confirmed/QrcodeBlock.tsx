import React from 'react';
import styled from 'styled-components';
import { MyButtonSmall } from '../UI/MyButtonSmall';
import qrcode from '../../images/qrcode.svg';

const QrcodeBlockStyled = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
width: 165px;
height: 165px;
`;

const H3 = styled.h3`
color: ${props => props.theme.txtColor};
font-size: 24px;
font-weight: 700;
line-height: 120%;
margin: 0;
`;

const Text = styled.p`
color: ${props => props.theme.txtFormColor};
font-size: 16px;
font-weight: 400;
line-height: 150%;
margin: 0 0 16px 0;
`;

const Block = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const ButtonBlock = styled.div`
display: flex;
justify-content: flex-end;
`;

export const QrcodeBlock = () => {
  return (
    <QrcodeBlockStyled>
      <div>
        <Image 
          src={qrcode}
          alt="qrcode"
        />
      </div>
      <Block>
        <H3>
          Your booking is ready!
        </H3>
        <Text>
          To receive a confirmation letter containing all the necessary information, simply scan the QR code or click the button below to download it.
        </Text>
        <ButtonBlock>
          <MyButtonSmall 
            onClick={() => {}}
          >
            Download
          </MyButtonSmall>
        </ButtonBlock>
      </Block>
    </QrcodeBlockStyled>
  );
};

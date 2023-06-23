import React from 'react';
import styled from 'styled-components';
import { MyButtonMedium } from '../UI/MyButtonMedium';
import { CheckDates } from './CheckDates';

const PriceContainer = styled.div`
border: 1px solid #D9DBE9;
border-radius: 8px;
max-width: 496px;
width: calc((100% - 24px) / 2);
height: 290px;
transform: translateY(-25%);
padding: 24px;

@media screen and (max-width: 768px) {
  width: 100%;
  transform: translateY(0);
  max-width: unset;
  height: auto;
}
`;

const Price = styled.div`
display: flex;
justify-content: space-between;
margin: 0 0 16px 0;

@media screen and (max-width: 768px) {
  flex-wrap: wrap;
}
`;

const PriceTxtNormal = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #14142A;
margin: 0;
`;

const PriceCurrencyNormal = styled.p`
font-weight: 600;
font-size: 18px;
line-height: 150%;
color: #14142A;
margin: 0;
`;

const PriceTxtGray = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #6E7191;
margin: 0;
`;

const PriceCurrencyGray = styled.p`
font-weight: 600;
font-size: 18px;
line-height: 150%;
color: #6E7191;
margin: 0;
`;

const PriceTxtBold = styled.p`
font-weight: 600;
font-size: 16px;
line-height: 150%;
color: #14142A;
margin: 0;
`;

const PriceCurrencyBold = styled.p`
font-weight: 700;
font-size: 32px;
line-height: 120%;
color: #14142A;
margin: 0;
`;

const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`;

export const PriceBlock = () => {
  return (
    <PriceContainer>
      <CheckDates />
      <Price>
        <PriceTxtNormal>
          Price per night
        </PriceTxtNormal>
        <PriceCurrencyNormal>
          euro 600
        </PriceCurrencyNormal>
      </Price>
      <Price>
        <PriceTxtGray>
          Taxes and fees
        </PriceTxtGray>
        <PriceCurrencyGray>
          euro 11.86
        </PriceCurrencyGray>
      </Price>
      <Price>
        <PriceTxtBold>
          Total cost
        </PriceTxtBold>
        <PriceCurrencyBold>
          euro 612
        </PriceCurrencyBold>
      </Price>
      <ButtonContainer>
        <MyButtonMedium onClick={() => {}}>
          Reserve
        </MyButtonMedium>
      </ButtonContainer>
    </PriceContainer>
  );
};

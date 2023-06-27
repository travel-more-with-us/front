import React from 'react';
import styled from 'styled-components';

const StyledAboutPrice = styled.div`
padding: 12px 0;
`;

const PriceDetails = styled.p`
color: #14142A;
font-size: 18px;
font-weight: 600;
line-height: 150%;
margin: 0 0 16px 0;
`;

const PriceBlock = styled.div`
display: flex;
justify-content: space-between;
margin: 0 0 4px 0;

&:last-child {
  margin: 0;
}
`;

const PerNightTxt = styled.span`
color: #14142A;
font-size: 16px;
line-height: 150%;
`;

const PricePerNight = styled.span`
color: #14142A;
font-size: 18px;
font-weight: 600;
line-height: 150%;
`;

const TaxesAndFees = styled.span`
color: #6E7191;
font-size: 16px;
line-height: 150%;
`;

const TaxesPrice = styled.span`
color: #6E7191;
font-size: 18px;
font-weight: 600;
line-height: 150%;
`;

const TotalCostTxt = styled.span`
color: #14142A;
font-size: 20px;
font-weight: 700;
line-height: 150%;
`;

const TotalCost = styled.span`
color: #14142A;
font-size: 32px;
font-weight: 700;
line-height: 120%;
`;

export const AboutPrice = () => {
  return (
    <StyledAboutPrice>
      <PriceDetails>
        Price details
      </PriceDetails>

      <PriceBlock>
        <PerNightTxt>
          Price per night
        </PerNightTxt>
        <PricePerNight>
          € 600
        </PricePerNight>
      </PriceBlock>

      <PriceBlock>
        <TaxesAndFees>
          Taxes and fees
        </TaxesAndFees>
        <TaxesPrice>
          € 11.86
        </TaxesPrice>
      </PriceBlock>

      <PriceBlock>
        <TotalCostTxt>
          Total cost
        </TotalCostTxt>
        <TotalCost>
          € 612.86
        </TotalCost>
      </PriceBlock>
    </StyledAboutPrice>
  );
};

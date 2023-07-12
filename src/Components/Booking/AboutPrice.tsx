import React from 'react';
import styled from 'styled-components';
import { StayInterface } from '../../types';
import { useSelector } from 'react-redux';
import { useGetDuration } from '../../hooksAndHelpers/useGetDuration';
import { useGetCoefficient } from '../../hooksAndHelpers/useGetCoefficient';
import { StateInterface } from '../../types/reduxTypes';

const StyledAboutPrice = styled.div`
padding: 12px 0;
`;

const PriceDetails = styled.p`
color: ${props => props.theme.txtColor};
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
color: ${props => props.theme.txtColor};
font-size: 16px;
line-height: 150%;
`;

const PricePerNight = styled.span`
color: ${props => props.theme.txtColor};
font-size: 18px;
font-weight: 600;
line-height: 150%;
`;

const TaxesAndFees = styled.span`
color: ${props => props.theme.txtColorSecondary};
font-size: 16px;
line-height: 150%;
`;

const TaxesPrice = styled.span`
color: ${props => props.theme.txtColorSecondary};
font-size: 18px;
font-weight: 600;
line-height: 150%;
`;

const TotalCostTxt = styled.span`
color: ${props => props.theme.txtColor};
font-size: 20px;
font-weight: 700;
line-height: 150%;
`;

const TotalCost = styled.span`
color: ${props => props.theme.txtColor};
font-size: 32px;
font-weight: 700;
line-height: 120%;
`;

interface Props {
  stay: StayInterface;
}

export const AboutPrice: React.FC <Props> = ({ stay }) => {
  const dates = useSelector((state: StateInterface) => state.dates);
  const duration = useGetDuration(dates.startDate, dates.endDate);
  const coefficient = useGetCoefficient();
  return (
    <StyledAboutPrice>
      <PriceDetails>
        Price details
      </PriceDetails>

      <PriceBlock>
        <PerNightTxt>
          {(duration === 1 || duration === 0) ? 'Price per night' : `Price per ${duration} nights`}
        </PerNightTxt>
        <PricePerNight>
          € {stay.price * coefficient}
        </PricePerNight>
      </PriceBlock>

      <PriceBlock>
        <TaxesAndFees>
          Taxes and fees
        </TaxesAndFees>
        <TaxesPrice>
          € {(stay.price * 0.02).toFixed(2)}
        </TaxesPrice>
      </PriceBlock>

      <PriceBlock>
        <TotalCostTxt>
          Total cost
        </TotalCostTxt>
        <TotalCost>
        € {(stay.price * coefficient) + (+(stay.price * 0.02).toFixed(2))}
        </TotalCost>
      </PriceBlock>
    </StyledAboutPrice>
  );
};

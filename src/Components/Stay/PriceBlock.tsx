import React from 'react';
import styled from 'styled-components';
import { MyButtonMedium } from '../UI/MyButtonMedium';
import { CheckDates } from './CheckDates';
import { Link } from 'react-router-dom';
import { StayInterface } from '../../types';
import { useSelector } from 'react-redux';
import { useGetDuration } from '../../hooksAndHelpers/useGetDuration';
import { useGetCoefficient } from '../../hooksAndHelpers/useGetCoefficient';
import { StateInterface } from '../../types/reduxTypes';

const PriceContainer = styled.div`
border: 1px solid ${props => props.theme.disabledColor};
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
color: ${props => props.theme.txtColor};
margin: 0;
`;

const PriceCurrencyNormal = styled.p`
font-weight: 600;
font-size: 18px;
line-height: 150%;
color: ${props => props.theme.txtColor};
margin: 0;
`;

const PriceTxtGray = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: ${props => props.theme.txtColorSecondary};
margin: 0;
`;

const PriceCurrencyGray = styled.p`
font-weight: 600;
font-size: 18px;
line-height: 150%;
color: ${props => props.theme.txtColorSecondary};
margin: 0;
`;

const PriceTxtBold = styled.p`
font-weight: 600;
font-size: 16px;
line-height: 150%;
color: ${props => props.theme.txtColor};
margin: 0;
`;

const PriceCurrencyBold = styled.p`
font-weight: 700;
font-size: 32px;
line-height: 120%;
color: ${props => props.theme.txtColor};
margin: 0;
`;

const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`;

const StyledLink = styled(Link)`
text-decoration: none;
`;

interface Props {
  stay: StayInterface;
}

export const PriceBlock: React.FC <Props> = ({ stay }) => {
  const dates = useSelector((state: StateInterface) => state.dates);
  const duration = useGetDuration(dates.startDate, dates.endDate);
  const coefficient = useGetCoefficient();
  return (
    <PriceContainer>
      <CheckDates />
      <Price>
        <PriceTxtNormal>
          Price per {duration === 1 || duration === 0 ? 'night' : `${duration} nights`}
        </PriceTxtNormal>
        <PriceCurrencyNormal>
          € {stay.price * coefficient}
        </PriceCurrencyNormal>
      </Price>
      <Price>
        <PriceTxtGray>
          Taxes and fees
        </PriceTxtGray>
        <PriceCurrencyGray>
          € {(stay.price * 0.02).toFixed(2)}
        </PriceCurrencyGray>
      </Price>
      <Price>
        <PriceTxtBold>
          Total cost
        </PriceTxtBold>
        <PriceCurrencyBold>
          € {(stay.price * coefficient) + (+(stay.price * 0.02).toFixed(2))}
        </PriceCurrencyBold>
      </Price>
      <ButtonContainer>
        <StyledLink to={`/booking/${stay.id}`}>
          <MyButtonMedium onClick={() => {}}>
            Reserve
          </MyButtonMedium>
        </StyledLink>
      </ButtonContainer>
    </PriceContainer>
  );
};

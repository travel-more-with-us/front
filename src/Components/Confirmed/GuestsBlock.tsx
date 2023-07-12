import React from 'react';
import styled from 'styled-components';
import { PaymentContext } from '../../context/PaymentContext';
import { useGetCoefficient } from '../../hooksAndHelpers/useGetCoefficient';
import { useSelector } from 'react-redux';

const StyledGuestsBlock = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
margin: 0 0 32px 0;
`;

const GuestBlock = styled.div`
display: flex;
gap: 16px;

@media screen and (max-width: 768px) {
  flex-direction: column;
}
`;

const GuestItem = styled.div`
width: calc((100% - 16px) / 2);

@media screen and (max-width: 768px) {
  width: 100%;
}
`;

const Title = styled.p`
color: ${props => props.theme.txtFormColor};
font-size: 16px;
font-weight: 400;
line-height: 150%;
margin: 0;
text-transform: uppercase;
`;

const Value = styled.p`
color: ${props => props.theme.txtColor};
font-size: 16px;
font-weight: 600;
line-height: 150%;
margin: 0;
`;

interface Props {
  price: number;
}

export const GuestsBlock: React.FC <Props> = ({ price }) => {
  const { fullname, email, phone } = React.useContext(PaymentContext);
  const { guests, dates } = useSelector((state: any) => state);
  const coefficient = useGetCoefficient();

  return (
    <StyledGuestsBlock>
      <GuestBlock>
        <GuestItem>
          <Title>
            Booking number
          </Title>
          <Value>
            #1
          </Value>
        </GuestItem>
        <GuestItem>
          <Title>
            Guest
          </Title>
          <Value>
            {fullname.value}
          </Value>
        </GuestItem>
      </GuestBlock>
      <GuestBlock>
        <GuestItem>
          <Title>
            Email
          </Title>
          <Value>
            {email.value}
          </Value>
        </GuestItem>
        <GuestItem>
          <Title>
            Phone
          </Title>
          <Value>
            {phone.value}
          </Value>
        </GuestItem>
      </GuestBlock>
      <GuestBlock>
        <GuestItem>
          <Title>
            Date
          </Title>
          <Value>
            {`${dates.startDate.toLocaleDateString()} - ${dates.endDate.toLocaleDateString()}`}
          </Value>
        </GuestItem>
        <GuestItem>
          <Title>
            Accomodation type
          </Title>
          <Value>
            {`${guests.rooms} rooms, ${guests.adults} adults`}
          </Value>
        </GuestItem>
      </GuestBlock>
      <GuestBlock>
        <GuestItem>
          <Title>
            Total price
          </Title>
          <Value>
            € {(price * coefficient) + (+(price * 0.02).toFixed(2))}
          </Value>
        </GuestItem>
        <GuestItem>
        </GuestItem>
      </GuestBlock>
    </StyledGuestsBlock>
  );
};

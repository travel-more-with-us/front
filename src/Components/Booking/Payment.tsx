/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Separator } from '../UI/Separator';
import { MyInput } from '../UI/MyInput';
import { MyButtonLarge } from '../UI/MyButtonLarge';
import { FormSeparator } from '../UI/FormSeparator';
import { PaymentContext } from '../../context/PaymentContext';

const StyledPayment = styled.form`
padding: 56px 0;
display: flex;
gap: 24px;

@media screen and (max-width: 768px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

const Column = styled.div`
  width: calc((100% - 50px) / 2);
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const H3 = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 120%;
  margin: 0 0 8px 0;
  `;

const InlineInputs = styled.div`
display: flex;
gap: 16px;
`;

const InlineInputContainer = styled.div`
width: calc((100% - 16px) / 2);
`;

const StyledTextArea = styled.textarea`
height: 140px;
padding: 24px;
border: 1px solid ${props => props.theme.disabledColor};
`;

const BookWith = styled.div`
margin: 0 0 24px 0;
display: flex;
gap: 16px;
flex-direction: column;
`;

const StyledSeparator = styled(FormSeparator)`
margin: 0 0 24px 0;
`;

const ErrorMessage = styled.div`
margin: 0 0 10px 0;
color: ${props => props.theme.errorColor};
`;

interface Props {
  setIsBooked: Dispatch<SetStateAction<boolean>>;
}

export const Payment: React.FC <Props> = ({ setIsBooked }) => {
  const {
    email,
    fullname,
    phone,
    street,
    country,
    zip,
    cardHolderName,
    cardNumber,
    expiration,
    cvv,
    emailError,
    emailDirty,
    fullnameDirty,
    fullnameError,
    cvvDirty,
    cvvError,
    streetDirty,
    streetError,
    countryDirty,
    countryError,
    cardHolderDirty,
    cardHolderError,
    cardNumberDirty,
    cardNumberError,
    expirationDirty,
    expirationError,
    zipDirty,
    zipError,
    phoneDirty,
    phoneError,
    blurHandler
  } = React.useContext(PaymentContext);

  function book(e: SubmitEvent) {
    e.preventDefault();
    if (!emailError && !phoneError && !fullnameError && !streetError && !zipError && !countryError && !cardHolderError && !cardNumberError && !expirationError && !cvvError) {
      setIsBooked(true);
    }
  }

  return (
    <StyledPayment>
      <Column>
        <H3>
          Customer Information
        </H3>
        <MyInput 
          value={fullname.value} 
          onChange={fullname.onChange} 
          placeholder='Enter fullname' 
          onBlur={blurHandler} 
          type='text'
          name="fullname"
        />
        {fullnameDirty && fullnameError && (
          <ErrorMessage>
            {fullnameError}
          </ErrorMessage>
        )}
        <MyInput 
          value={email.value} 
          onChange={email.onChange} 
          placeholder='Enter email address' 
          onBlur={blurHandler}
          type='email'
          name="email"
        />
        {emailDirty && emailError && (
          <ErrorMessage>
            {emailError}
          </ErrorMessage>
        )}
        <MyInput 
          value={phone.value} 
          onChange={phone.onChange} 
          placeholder='+380 000000000' 
          onBlur={blurHandler}
          type="tel"
          name="phone"
        />
        {phoneDirty && phoneError && (
          <ErrorMessage>
            {phoneError}
          </ErrorMessage>
        )}
        <MyInput 
          value={street.value} 
          onChange={street.onChange} 
          placeholder='Enter street' 
          onBlur={blurHandler}
          type='text'
          name="street"
        />
        {streetDirty && streetError && (
          <ErrorMessage>
            {streetError}
          </ErrorMessage>
        )}
        <InlineInputs>
          <InlineInputContainer>
            <MyInput 
              value={zip.value} 
              onChange={zip.onChange} 
              placeholder='Enter ZIP' 
              onBlur={blurHandler}
              type='number'
              name="zip"
            />
            {zipDirty && zipError && (
              <ErrorMessage>
                {zipError}
              </ErrorMessage>
            )}
          </InlineInputContainer>
          <InlineInputContainer>
            <MyInput 
              value={country.value} 
              onChange={country.onChange} 
              placeholder='Enter Country' 
              onBlur={blurHandler}
              type='text'
              name="country" 
            />
            {countryDirty && countryError && (
              <ErrorMessage>
                {countryError}
              </ErrorMessage>
            )}
          </InlineInputContainer>
        </InlineInputs>
        <StyledTextArea />
      </Column>
      <Separator />
      <Column>
        <H3>
          Payment details
        </H3>
        <BookWith>
          <MyButtonLarge
            outlined="true"
            disabled={false}
            onClick={() => {}}
          >
            Book with Google Pay
          </MyButtonLarge>
          <MyButtonLarge
            outlined="true"
            disabled={false}
            onClick={() => {}}
          >
            Book with Apple Pay
          </MyButtonLarge>
          <MyButtonLarge
            outlined="true"
            disabled={false}
            onClick={() => {}}
          >
            Book with PayPal
          </MyButtonLarge>
        </BookWith>
        <StyledSeparator />
        <MyInput 
          value={cardHolderName.value} 
          onChange={cardHolderName.onChange} 
          placeholder='Cardholders name' 
          onBlur={blurHandler}
          type='text'
          name="cardholderName"
        />
        {cardHolderDirty && cardHolderError && (
          <ErrorMessage>
            {cardHolderError}
          </ErrorMessage>
        )}
        <MyInput 
          value={cardNumber.value} 
          onChange={cardNumber.onChange} 
          placeholder='Card number' 
          onBlur={blurHandler}
          type='number'
          name="cardNumber"
        />
        {cardNumberDirty && cardNumberError && (
          <ErrorMessage>
            {cardNumberError}
          </ErrorMessage>
        )}
        <InlineInputs>
          <InlineInputContainer>
            <MyInput 
              value={expiration.value} 
              onChange={expiration.onChange} 
              placeholder='Expiration day' 
              onBlur={blurHandler}
              type='text' 
              name="expiration"
            />
            {expirationDirty && expirationError && (
              <ErrorMessage>
                {expirationError}
              </ErrorMessage>
            )}
          </InlineInputContainer>
          <InlineInputContainer>
            <MyInput 
              value={cvv.value} 
              onChange={cvv.onChange} 
              placeholder='CVV' 
              onBlur={blurHandler}
              type='text'
              name="cvv"
            />
            {cvvDirty && cvvError && (
              <ErrorMessage>
                {cvvError}
              </ErrorMessage>
            )}
          </InlineInputContainer>
        </InlineInputs>
        <MyButtonLarge onClick={book} disabled={false}>
          Book
        </MyButtonLarge>
      </Column>
    </StyledPayment>
  );
};

import React from 'react';
import styled from 'styled-components';
import { Separator } from '../UI/Separator';
import { MyInput } from '../UI/MyInput';
import { MyButtonLarge } from '../UI/MyButtonLarge';
import { FormSeparator } from '../UI/FormSeparator';

const StyledPayment = styled.form`
padding: 56px 0;
display: flex;
gap: 24px;
`;

const Column = styled.div`
  width: calc((100% - 50px) / 2);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;


export const Payment = () => {
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [zip, setZip] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [cardHolderName, setCardHolderName] = React.useState('');
  const [cardNumber, setCardNumber] = React.useState('');
  const [expiration, setExpiration] = React.useState('');
  const [cvv, setCvv] = React.useState('');

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

  const InlineInput = styled(MyInput)`
  width: calc((100% - 16px) / 2);
  `;

  const StyledTextArea = styled.textarea`
  height: 140px;
  padding: 24px;
  border: 1px solid #D9DBE9;
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

  return (
    <StyledPayment>
      <Column>
        <H3>
          Customer Information
        </H3>
        <MyInput 
          value={fullname} 
          onChange={setFullname} 
          placeholder='Enter fullname' 
          onBlur={() => {}} 
          type='text'
        />
        <MyInput 
          value={email} 
          onChange={setEmail} 
          placeholder='Enter email address' 
          onBlur={() => {}}
          type='email' 
        />
        <MyInput 
          value={phone} 
          onChange={setPhone} 
          placeholder='+380 000000000' 
          onBlur={() => {}}
          type='phone' 
        />
        <MyInput 
          value={street} 
          onChange={setStreet} 
          placeholder='Enter street' 
          onBlur={() => {}}
          type='text' 
        />
        <InlineInputs>
          <InlineInput 
            value={zip} 
            onChange={setZip} 
            placeholder='Enter ZIP' 
            onBlur={() => {}}
            type='number' 
          />
          <InlineInput 
            value={country} 
            onChange={setCountry} 
            placeholder='Enter Country' 
            onBlur={() => {}}
            type='text' 
          />
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
          value={cardHolderName} 
          onChange={setCardHolderName} 
          placeholder='Cardholders name' 
          onBlur={() => {}} 
          type='text'
        />
        <MyInput 
          value={cardNumber} 
          onChange={setCardNumber} 
          placeholder='Card number' 
          onBlur={() => {}}
          type='number' 
        />
        <InlineInputs>
          <InlineInput 
            value={expiration} 
            onChange={setExpiration} 
            placeholder='Expiration day' 
            onBlur={() => {}}
            type='text' 
          />
          <InlineInput 
            value={cvv} 
            onChange={setCvv} 
            placeholder='CVV' 
            onBlur={() => {}}
            type='text' 
          />
        </InlineInputs>
        <MyButtonLarge onClick={()=> {}} disabled={false}>
          Book
        </MyButtonLarge>
      </Column>
    </StyledPayment>
  );
};

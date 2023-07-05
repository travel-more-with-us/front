import React from 'react';
import styled from 'styled-components';
import { Separator } from '../UI/Separator';
import { MyInput } from '../UI/MyInput';
import { MyButtonLarge } from '../UI/MyButtonLarge';
import { FormSeparator } from '../UI/FormSeparator';
import { useInput } from '../../hooksAndHelpers/useInput';

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

const InlineInput = styled(MyInput)`
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

export const Payment = () => {
  const fullname = useInput('');
  const email = useInput('');
  const phone = useInput('');
  const street = useInput('');
  const zip = useInput('');
  const country = useInput('');
  const cardHolderName = useInput('');
  const cardNumber = useInput('');
  const expiration = useInput('');
  const cvv = useInput('');

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
          onBlur={() => {}} 
          type='text'
        />
        <MyInput 
          value={email.value} 
          onChange={email.onChange} 
          placeholder='Enter email address' 
          onBlur={() => {}}
          type='email' 
        />
        <MyInput 
          value={phone.value} 
          onChange={phone.onChange} 
          placeholder='+380 000000000' 
          onBlur={() => {}}
          type='phone' 
        />
        <MyInput 
          value={street.value} 
          onChange={street.onChange} 
          placeholder='Enter street' 
          onBlur={() => {}}
          type='text' 
        />
        <InlineInputs>
          <InlineInput 
            value={zip.value} 
            onChange={zip.onChange} 
            placeholder='Enter ZIP' 
            onBlur={() => {}}
            type='number' 
          />
          <InlineInput 
            value={country.value} 
            onChange={country.onChange} 
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
          value={cardHolderName.value} 
          onChange={cardHolderName.onChange} 
          placeholder='Cardholders name' 
          onBlur={() => {}} 
          type='text'
        />
        <MyInput 
          value={cardNumber.value} 
          onChange={cardNumber.onChange} 
          placeholder='Card number' 
          onBlur={() => {}}
          type='number' 
        />
        <InlineInputs>
          <InlineInput 
            value={expiration.value} 
            onChange={expiration.onChange} 
            placeholder='Expiration day' 
            onBlur={() => {}}
            type='text' 
          />
          <InlineInput 
            value={cvv.value} 
            onChange={cvv.onChange} 
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

import React from 'react';
import styled from 'styled-components';
import { SearchInput } from './SearchInput';
import { Icons } from './Icons';
import { Calendar } from './Calendar';
import { Guests } from './Guests';

const StyledSearch = styled.div`
background: #FFFFFF;
border: 1px solid #D9DBE9;
box-shadow: 2px 2px 6px rgba(209, 209, 209, 0.1);
border-radius: 16px;
margin: 0 auto 72px;
transform: translateY(-50%);
width: 90%;
height: 184px;
padding: 24px;
box-sizing: border-box;
`;

const Block = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`;

const Inputs = styled.div`
display: flex;
width: 100%;
gap: 20px;
position: relative;
`;

export const Search = () => {
  return (
    <StyledSearch>
      <Block>
        <Inputs>
          <SearchInput />
          <Calendar />
          <Calendar />
          <Guests />
        </Inputs>
        <Icons />
      </Block>
    </StyledSearch>
  );
};

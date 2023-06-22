import React from 'react';
import styled from 'styled-components';
import { ButtonOutlined } from '../UI/ButtonOutlined';
import change from '../../images/change.svg';

const CityAndCountry = styled.p`
font-size: 18px;
font-weight: 600;
line-height: 150%;
margin: 0;
`;

const CountOfVillas = styled.p`
color: #A0A3BD;
font-size: 16px;
line-height: 150%;
margin: 0;
`;

const Header = styled.div`
display: flex;
justify-content: space-between;
margin: 0 0 24px 0;
`;

const Buttons = styled.div`
display: flex;
gap: 24px;
`;

const ButtonBlock = styled.div`
display: flex;
align-items: center;
`;

export const ListHeader = () => {
  return (
    <Header>
      <div>
        <CityAndCountry>
          Split, Croatia
        </CityAndCountry>
        <CountOfVillas>
          views 24 results
        </CountOfVillas>
      </div>
      <Buttons>
        <ButtonOutlined>
          Grid view
        </ButtonOutlined>
        <ButtonOutlined>
          <ButtonBlock>
            <span>
              Sort by
            </span>
            <img 
              src={change}
              alt="change"
            />
          </ButtonBlock>
        </ButtonOutlined>
      </Buttons>
    </Header>
  );
};

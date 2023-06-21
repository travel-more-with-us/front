import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { MySelect } from '../UI/MySelect';

const StyledLogo = styled.div`
display: flex;
gap: 40px;

`;

const LogoBlock = styled(Link)`
display: flex;
gap: 8px;
align-items: center;
justify-content: center;
font-weight: 700;
font-size: 24px;
line-height: 120%;
text-decoration: none;
`;

const Image = styled.img`
width: 40px;
heigh: 40px;
`;

const Text = styled.p`
margin: 0;
font-weight: 700;
font-size: 24px;
line-height: 120%;
color: #14142A;
`;

export const Logo = () => {
  const options = [
    'Discover',
    'And',
    'etc',
  ];

  return (
    <StyledLogo>
      <LogoBlock to="/">
        <Image src={logo} />
        <Text>
          Travel More
        </Text>
      </LogoBlock>
      <MySelect
        options={options}
      />
    </StyledLogo>
  );
};

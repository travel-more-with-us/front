import React from 'react';
import styled from 'styled-components';
import arrowRight from '../../images/arrow-right.svg';

const Header = styled.div`
display: flex;
align-items: center;
margin: 0 0 16px 0;
`;

const Link = styled.p`
font-size: 18px;
line-height: 150%;
margin: 0;
`;

const Text = styled.p`
color: #E35129;
font-size: 20px;
font-weight: 700;
line-height: 150%;
margin: 0;
`;

export const ResultHeader = () => {
  return (
    <Header>
      <Link>
        Home
      </Link>
      <img 
        src={arrowRight}
        alt="arrow right"
      />
      <Link>
        Croatia
      </Link>
      <img 
        src={arrowRight}
        alt="arrow right"
      />
      <Link>
        Split
      </Link>
      <img 
        src={arrowRight}
        alt="arrow right"
      />
      <Text>
        Search results
      </Text>
    </Header>
  );
};

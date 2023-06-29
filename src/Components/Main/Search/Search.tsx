import React from 'react';
import styled from 'styled-components';
import { Icons } from './Icons';
import { Place } from '../../../types';

import { Container } from '../../Layout/Container';
import { Inputs } from './Inputs';

const StyledSearch = styled.div`
background: #FFFFFF;
border: 1px solid ${props => props.theme.disabledColor};
box-shadow: 2px 2px 6px rgba(209, 209, 209, 0.1);
border-radius: 16px;
margin: 0 auto 72px;
transform: translateY(-50%);
width: 95%;
height: 184px;
padding: 24px;
box-sizing: border-box;
position: relative;
z-index: 2;


@media screen and (max-width: 768px) {
  height: auto;
  transform: translateY(-10%);
}
`;

const Block = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`;

interface Props {
  places: Place[];
}

export const Search: React.FC <Props> = ({ places }) => {
  return (
    <Container>
      <StyledSearch>
        <Block>
          <Inputs 
            places={places}
          />
          <Icons />
        </Block>
      </StyledSearch>
    </Container>
  );
};

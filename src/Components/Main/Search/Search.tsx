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
margin: 0;
padding: 24px;
box-sizing: border-box;
position: absolute;
z-index: 2;
bottom: 0;
transform: translate(0, 50%);


@media screen and (max-width: 768px) {
  position: relative;
  z-index: 2;
  top: 0;
  transform: translate(0, 0);
}
`;

const Block = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
width: 100%;
`;

const Wrapper = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 768px) {
  justify-content: flex-start;
  flex-direction: column;
}
`;

interface Props {
  places: Place[];
}

export const Search: React.FC <Props> = ({ places }) => {
  return (
    <Wrapper>
      <StyledSearch>
        <Container>
          <Block>
            <Inputs 
              places={places}
            />
            <Icons />
          </Block>
        </Container>
      </StyledSearch>
    </Wrapper>
  );
};

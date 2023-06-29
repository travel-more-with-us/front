import React from 'react';
import styled from 'styled-components';
import { StayLink } from '../UI/StayLink';
import { StayInterface } from '../../types';

const About = styled.div`
max-width: 704px;
width: calc((100% - 24px) / 2);

@media screen and (max-width: 768px) {
  width: 100%;
}
`;

const Header = styled.h2`
font-weight: 700;
font-size: 32px;
line-height: 120%;
color: ${props => props.theme.txtColor};
margin: 0 0 16px 0;
`;

const Text = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: ${props => props.theme.txtFormColor};
margin: 0;
`;

interface Props {
  stay: StayInterface
}

export const AboutBlock: React.FC <Props> = ({ stay }) => {
  const [showAll, setShowAll] = React.useState(false);
  function showMore() {
    setShowAll(!showAll);
  }
  return (
    <About>
      <Header>
        About this space
      </Header>
      <Text>
        {showAll ? stay.about : stay.about.slice(0, 450) + ' ...'}
      </Text>
      <StayLink click={showMore} margin="8px 0 0 0">
        {!showAll ? 'Show more' : 'Hide text'}
      </StayLink>
    </About>
  );
};

import React from 'react';
import styled from 'styled-components';
import { VillaLink } from '../UI/VillaLink';

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
color: #4E4B66;
margin: 0;
`;

export const AboutBlock: React.FC <any> = ({ villa }) => {
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
        {showAll ? villa.about : villa.about.slice(0, 450) + ' ...'}
      </Text>
      <VillaLink click={showMore} margin="8px 0 0 0">
        {!showAll ? 'Show more' : 'Hide text'}
      </VillaLink>
    </About>
  );
};

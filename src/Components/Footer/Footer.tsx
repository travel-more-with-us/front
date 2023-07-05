import React from 'react';
import styled from 'styled-components';
import { Container } from '../Layout/Container';
import down from '../../images/down.svg';

const StyledFooter = styled.footer`
padding: 24px 0;
border-top: 1px solid ${props => props.theme.disabledColor};
`;

const List = styled.ul`
padding: 0;
margin: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
gap: 24px;
`;

const Block = styled.div`
display: flex;
justify-content: space-between;
`;

const Text = styled.p`
margin: 0;
position: relative;
padding: 0 40px 0 0;

&:before {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  background-image: url(${down});
  transform: rotate(180deg);
  width: 24px;
  height: 24px;
}
`;

export const Footer = () => {
  const links = [
    'Terms',
    'Sitemap',
    'Privacy',
  ];

  return (
    <StyledFooter>
      <Container>
        <Block>
          <List>
            <li>
              2023 TravelMore
            </li>
            {links.map(link => (
              <li key={link}>
                {link}
              </li>
            ))}
          </List>
          <Text>
            Support & resources
          </Text>
        </Block>
      </Container>
    </StyledFooter>
  );
};

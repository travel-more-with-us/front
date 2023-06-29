import React from 'react';
import styled from 'styled-components';
import { Stars } from '../UI/Stars';
import { Oval } from '../UI/Oval';
import { StayInterface } from '../../types';

const Header = styled.h1`
font-weight: 700;
font-size: 32px;
line-height: 120%;
color: ${props => props.theme.txtColor};
margin: 0 0 4px 0;
`;

const Block = styled.div`
display: flex;
justify-content: space-between;

@media screen and (max-width: 768px) {
  flex-wrap: wrap;
}
`;

const BlockEvaluations = styled.div`
display: felx;
justify-content: space-between;
align-items: center;
font-weight: 600;
font-size: 16px;
line-height: 150%;
color: ${props => props.theme.txtFormColor};

@media screen and (max-width: 768px) {
  flex-wrap: wrap;
}
`;

const Rewievs = styled.span`
margin: 0 8px 0 8px;
`;

const Street = styled.span`
  margin: 0 2px 0 0;
`;

const City = styled.span`
margin: 0 2px 0 0;
`;

const Info = styled.div`
  margin: 0 0 20px 0;
`;

interface Props {
  stay: StayInterface;
}

export const MainInfo: React.FC <Props> = ({ stay }) => {
  return (
    <Info>
      <Header>
        {stay.name}
      </Header>
      <Block>
        <BlockEvaluations>
          <Stars count={stay.rating} />
          <Rewievs>
            {`${stay.reviews} rewievs`}
          </Rewievs>
          <Oval />
          <Street>
            {`${stay.street}, `}
          </Street>
          <City>
            {`${stay.city}, `}
          </City>
          <span>
            {`${stay.country}.`}
          </span>
        </BlockEvaluations>
        <div>
          <span>
            Share
          </span>
          <span>
            Save
          </span>
        </div>
      </Block>
    </Info>
  );
};

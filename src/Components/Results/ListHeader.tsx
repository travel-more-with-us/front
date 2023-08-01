import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { SortSelect } from './SortSelect';
import { StateInterface } from '../../types/reduxTypes';

const CityAndCountry = styled.p`
font-size: 18px;
font-weight: 600;
line-height: 150%;
margin: 0;
`;

const CountOfVillas = styled.p`
color: ${props => props.theme.placeholderColor};
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

interface Props {
  count: number;
}

export const ListHeader: React.FC <Props> = ({ count }) => {
  const departure = useSelector((state: StateInterface) => state.departure);
  return (
    <Header>
      <div>
        <CityAndCountry>
          {departure.city + ', ' + departure.country}
        </CityAndCountry>
        <CountOfVillas>
          {`views ${count} results`}
        </CountOfVillas>
      </div>
      <Buttons>
        {/* <ButtonOutlined>
          Map
        </ButtonOutlined> */}
        <SortSelect 
          options={[
            {
              label: 'Price: low to high',
            },
            {
              label: 'Price: high to low'
            },
            {
              label: 'Name A-Z'
            },
            {
              label: 'Name Z-A'
            },
            {
              label: 'Rating from 1 to 5'
            },
            {
              label: 'Rating from 5 to 1'
            }
          ]}
          defaultField="Sort by"
          arrow={false}
        />
      </Buttons>
    </Header>
  );
};

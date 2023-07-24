import React from 'react';
import styled from 'styled-components';
import { ListHeader } from './ListHeader';
import { Stay } from './Stay';
import { StayInterface } from '../../types';
import { useSelector } from 'react-redux';
import { useGetDuration } from '../../hooksAndHelpers/useGetDuration';
import { StateInterface } from '../../types/reduxTypes';

const List = styled.div`
padding: 10px;
width: calc((100% - 24px) - ((100% - 24px) / 4));

@media screen and (max-width: 768px) {
  width: 100%;
  max-width: unset;
}
`;

const Stays = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`;

const Text = styled.p`
color: ${props => props.theme.txtColor};
font-size: 28px;
font-weight: 700;
line-height: 150%;
margin: 0;
`;

const NoFound = styled.div`
padding: 50px 0;
`;

interface Props {
  stays: StayInterface[];
}

export const StaysList: React.FC <Props> = ({ stays }) => {
  const dates = useSelector((state: StateInterface) => state.dates);
  const duration = useGetDuration(dates.startDate, dates.endDate);
  const adults = useSelector((state: StateInterface) => state.guests.adults);

  return (
    <List>
      <ListHeader 
        count={stays.length}
      />
      <Stays>
        {stays.map(stay => (
          <Stay 
            stay={stay}
            key={stay.id}
            duration={duration || 2}
            adults={adults}
          />
        ))}
        {stays.length === 0 && (
          <NoFound>
            <Text>
              No found any results by this criteria
            </Text>
          </NoFound>
        )}
      </Stays>
    </List>
  );
};

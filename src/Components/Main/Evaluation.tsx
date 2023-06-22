import React from 'react';
import styled from 'styled-components';
import { Stars } from '../UI/Stars';
import { Place } from '../../types';

const StyledEvaluation = styled.div`
display: flex;
gap: 20px;
align-items: center;
`;

const Rewievs = styled.p`
margin: 0;
color: ${props => props.theme.txtColorSecondary};
`;

interface Props {
  place: Place;
}

export const Evaluation: React.FC <Props> = ({ place }) => {
  return (
    <StyledEvaluation>
      <Rewievs>
        {`${place.rewievs} rewievs`}
      </Rewievs>
      <div>
        <Stars
          count={place.rating}
        />
      </div>
    </StyledEvaluation>
  );
};

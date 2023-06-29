import React from 'react';
import styled from 'styled-components';
import { StayLink } from '../UI/StayLink';
import { ReviewListItemInterface } from '../../types';

const CommentBlock = styled.p`
margin: 0;
font-size: 16px;
line-height: 24px;
font-weight: 400;
color: ${props => props.theme.txtFormColor};
`;

interface Props {
  listItem: ReviewListItemInterface;
}

export const Comment: React.FC <Props> = ({ listItem }) => {
  const [showAll, setShowAll] = React.useState(false);
  
  function showMore() {
    setShowAll(!showAll);
  }
  return (
    <div>
      <CommentBlock>
        {showAll ? listItem.text  : listItem.text.length < 80 ? listItem.text : listItem.text.slice(0, 80) + ' ...'}
      </CommentBlock>
      {listItem.text.length > 80 && (
        <StayLink click={showMore}>
          {!showAll ? 'Show more' : 'Hide text'}
        </StayLink>
      )}
    </div>
  );
};

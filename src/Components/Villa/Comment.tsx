import React from 'react';
import styled from 'styled-components';
import { VillaLink } from '../UI/VillaLink';

const CommentBlock = styled.p`
margin: 0;
font-size: 16px;
line-height: 24px;
font-weight: 400;
color: #4E4B66;
`;

export const Comment: React.FC <any> = ({ listItem }) => {
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
        <VillaLink click={showMore}>
          {!showAll ? 'Show more' : 'Hide text'}
        </VillaLink>
      )}
    </div>
  );
};

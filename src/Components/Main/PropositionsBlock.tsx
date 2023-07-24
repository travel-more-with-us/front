import React from 'react';
import styled from 'styled-components';
import { Propositions } from './Propositions';
import { Search } from './Search/Search';
import { Loading } from '../Loading/Loading';

const StyledMain = styled.div`
padding: 0px 0 60px;

@media screen and (max-width: 768px) {
  padding: 30px 0 60px;
}
`;

const Wrapper = styled.div`
display: none;

@media screen and (max-width: 768px) {
  display: block;
}
`;

export const PropositionsBlock: React.FC <any> = ({ places, loading, error }) => {
  return (
    <StyledMain>
      <Wrapper>
        {!loading && (
          <Search
            places={places}
          />
        )}
      </Wrapper>
      {loading ? (
        <Loading />

      ) : (
        <>
          <Propositions
            places={places.slice(0, 8)}
            header="Looking for the perfect stay?"
            description="Pick a vibe and explore the top destinations"
          />
          <Propositions
            places={places.slice(8, 16)}
            header="Journey to the waves and palm trees"
            description="Pick a vibe and explore the top destinations"
          />
        </>
      )}
    </StyledMain>
  );
};

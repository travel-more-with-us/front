/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';
import { Container } from '../Layout/Container';
import { Inputs } from '../Main/Search/Inputs';
import { Filters } from './Filters';
import { StaysList } from './StaysList';
import { Back } from '../UI/Back';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetCoefficient } from '../../hooksAndHelpers/useGetCoefficient';
import { StateInterface } from '../../types/reduxTypes';
import { useSortedAndFilteredStays } from '../../hooksAndHelpers/useSortedAndFilteredStays';
import axios from 'axios';
import { baseUrl } from '../../api';
import { StayInterface } from '../../types';
import { Loading } from '../Loading/Loading';
import { useFetching } from '../../hooksAndHelpers/useFetching';
import { Error } from '../Error/Error';

const StyledResults = styled.main`
padding: 32px 0 80px;
background: #fff;
`;

const Block = styled.div`
display: flex;
gap: 24px;

@media screen and (max-width: 768px) {
  flex-direction: column;
}
`;

const InputsContainer = styled.div`
margin: 0 0 24px 0;
`;

export const ResultsMain = () => {
  const filters = useSelector((state: StateInterface) => state.filters);
  const coefficient = useGetCoefficient();
  const sortBy = useSelector((state: StateInterface) => state.sort);
  const navigate = useNavigate();
  
  const [stays, setStays] = React.useState<StayInterface[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [places, loadingPlaces, errorPlaces] = useFetching(baseUrl + 'destinations');

  function fetchStays() {
    setLoading(true);
    axios.get(baseUrl + 'stays')
      .then(response => {
        setStays(response.data);
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  React.useEffect(() => {
    fetchStays();
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const sortedAndFilteredStays = useSortedAndFilteredStays(stays, filters, sortBy, coefficient);
  console.log(stays);

  return (
    <StyledResults>
      <Container>
        {/* <ResultHeader /> */}
        <Back 
          name="Back to Home"
          goBack={goBack}
        />
        <InputsContainer>
          { errorPlaces ? (
            <Error
              error={`Can not load places, ${errorPlaces}`}
            />
          ) : (
            !loadingPlaces && (
              <Inputs 
                places={places}
              />
            )
          )
          }
        </InputsContainer>
        {loading ? (
          <Loading />
        ) : (
          error ? (
            <Error 
              error={`Can not load stays, ${error}`}
            />
          ) : (
            <Block>
              <Filters 
                stays={stays}
              />
              <StaysList 
                stays={sortedAndFilteredStays}
              />
            </Block>
          )
        )}
      </Container>
    </StyledResults>
  );
};

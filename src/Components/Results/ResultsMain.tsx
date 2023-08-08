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
import { MyButtonMedium } from '../UI/MyButtonMedium';
import { UpButton } from '../UI/UpButton';

const StyledResults = styled.main`
padding: 32px 0 80px;
background: #fff;
scroll-behaviour: smooth;
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

const LoadMoreContainer = styled.div`
display: flex;
justify-content: center;
`;

export const ResultsMain = () => {
  const filters = useSelector((state: StateInterface) => state.filters);
  const coefficient = useGetCoefficient();
  const sortBy = useSelector((state: StateInterface) => state.sort);
  const navigate = useNavigate();
  
  const [stays, setStays] = React.useState<StayInterface[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [places, loadingPlaces, errorPlaces] = useFetching(baseUrl + 'destinations');
  const [totalCount, setTotalCount] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);

  function fetchStays() {
    setLoading(true);
    axios.get(baseUrl + `stays?page=${page}&limit=10`)
      .then(response => {
        if (response.data.hasOwnProperty('countOfElements')) {
          setTotalCount(response.data.countOfElements);
          if (response.data.currentPage !== 1) {
            setStays((prev: any) => [...prev, ...response.data.data]);
            setCurrentPage(response.data.currentPage);
          }
        } else {
          setStays(response.data);
        }
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
  }, [page]);

  const goBack = () => {
    navigate(-1);
  };

  const sortedAndFilteredStays = useSortedAndFilteredStays(stays, filters, sortBy, coefficient);

  function loadmore() {
    setPage(prev => prev + 1);
  }

  const lastPage = Math.ceil(totalCount / 10);

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
        {loading && currentPage === 1 ? (
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
                totalCount={totalCount}
              />
            </Block>
          )
        )}
        {lastPage !== page && (
          loading ? (
            <Loading />
          ) : (
            <LoadMoreContainer>
              <MyButtonMedium onClick={() => {
                loadmore();
              }}>
                Load more
              </MyButtonMedium>
            </LoadMoreContainer>
          )
        )}
        <UpButton />
      </Container>
    </StyledResults>
  );
};

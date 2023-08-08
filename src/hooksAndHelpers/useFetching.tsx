/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import axios from 'axios';

export const useFetching = (url: string) => {
  const [data, setData] = React.useState<any>();
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const [totalCount, setTotalCount] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);

  function fetchData() {
    setIsLoading(true);
    axios.get(url)
      .then(response => {
        if (response.data.hasOwnProperty('countOfElements')) {
          setTotalCount(response.data.countOfElements);
          if (response.data.currentPage !== 1) {
            setData((prev: any) => [...prev, ...response.data.data]);
            setCurrentPage(response.data.currentPage);
          }
        } else {
          setData(response.data);
        }
        
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return [data, isLoading, error, totalCount, currentPage];
};

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import axios from 'axios';

export const useFetching = (url: string) => {
  const [data, setData] = React.useState<any>();
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  function fetchData() {
    setIsLoading(true);
    axios.get(url)
      .then(response => {
        setData(response.data);
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

  return [data, isLoading, error];
};

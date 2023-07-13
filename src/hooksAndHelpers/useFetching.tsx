import React from 'react';
import axios from 'axios';

export const useFetching = (url: string) => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  function fetchDestinations() {
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
    fetchDestinations();
  }, []);

  return [data, isLoading, error];
};

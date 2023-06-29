import React from 'react';
import { Place, SearchOption } from '../types';

export const useSearch = (places: Place[], setDropdownVisible: any) => {
  const [searchInput, setSearchInput] = React.useState('');
  const options = places;
  const [iconIsGreen, setIconIsGreen] = React.useState(false);

  React.useEffect(() => {
    if (searchInput !== '' && places.some(place => searchInput.toLowerCase().includes(place.city.toLowerCase()))) {
      setIconIsGreen(true);
    } else {
      setIconIsGreen(false);
    }
  }, [searchInput, places]);

  const searchedOptions = React.useMemo(() => {
    if (searchInput === '') {
      return [];
    }

    const optionsFiltered = options.filter(option =>
      option.city.toLowerCase().includes(searchInput.toLowerCase()) ||
      option.country.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (searchInput !== '' && optionsFiltered.length === 0) {
      return [{
        city: 'City not found',
        country: ''
      }];
    }

    return optionsFiltered;
  }, [searchInput, options]);

  const handleItemClick = (option: SearchOption) => {
    if (option.city === 'City not found') {
      return;
    }

    const valueToSet = option.city + ', ' + option.country;
    setSearchInput(valueToSet);
    setDropdownVisible(false);
  };

  function handleSearch(str: string) {
    setSearchInput(str);
    setDropdownVisible(true);
  }

  return {
    iconIsGreen,
    searchedOptions,
    handleSearch,
    handleItemClick,
    searchInput
  };
};
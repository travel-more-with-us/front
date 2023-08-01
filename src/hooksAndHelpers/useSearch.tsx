/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, SetStateAction } from 'react';
import { OptionInterface, Place, SearchOption } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { updateDeparture } from '../store/actions';
import { StateInterface } from '../types/reduxTypes';

export const useSearch = (places: Place[], setDropdownVisible: Dispatch<SetStateAction<boolean>>) => {
  const [searchInput, setSearchInput] = React.useState('');
  const options = places;
  const [iconIsGreen, setIconIsGreen] = React.useState(false);
  const dispatch = useDispatch();
  const departurePlace = useSelector((state: StateInterface) => state.departure);

  React.useEffect(() => {
    if (departurePlace.city !== '') {
      const valueToSet = departurePlace.city + ', ' + departurePlace.country;
      setSearchInput(valueToSet);
      setDropdownVisible(false);
    }
  }, []);

  React.useEffect(() => {
    if (searchInput !== '' && places.some((place: Place) => searchInput.toLowerCase().includes(place.city.toLowerCase()) 
    || searchInput.toLowerCase().includes(place.country.toLowerCase()) 
    || place.city.toLowerCase().includes(searchInput.toLowerCase()) 
    || place.country.toLowerCase().includes(searchInput.toLowerCase()))) {
      setIconIsGreen(true);
    } else {
      setIconIsGreen(false);
    }
  }, [searchInput, places]);

  const searchedOptions = React.useMemo(() => {
    if (searchInput === '') {
      return [];
    }

    const optionsFiltered = options.filter((option: OptionInterface) =>
      option.city.toLowerCase().includes(searchInput.toLowerCase()) ||
      option.country.toLowerCase().includes(searchInput.toLowerCase()) ||
      searchInput.toLowerCase().includes(option.city.toLowerCase()) ||
      searchInput.toLowerCase().includes(option.country.toLowerCase()));

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
    dispatch(updateDeparture(option));
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
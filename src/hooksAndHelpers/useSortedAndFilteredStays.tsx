/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react';
import { AmenityInterface, FilterOptionInterface, FilterPriceOptionInterface, StayInterface } from '../types';

export const useSortedAndFilteredStays = (stays: StayInterface[], filters: any, sortBy: string, coefficient: number) => {
  const sortAndFilterStays = () => {
    let copyOfStays = [...stays];
    if (Object.keys(filters).length === 0) {
      console.log('key length 0');
      return copyOfStays;
    }

    if (filters.hasOwnProperty('priceRange')) {
      if (filters.priceCheckboxFilters.length !== 0) {
        const sortedCheckboxFilters = filters.priceCheckboxFilters.sort((a: FilterPriceOptionInterface, b: FilterPriceOptionInterface) => a.min - b.min);
        copyOfStays = copyOfStays.filter((stay: StayInterface) => stay.price * coefficient > sortedCheckboxFilters[0].min && stay.price * coefficient <= sortedCheckboxFilters[sortedCheckboxFilters.length - 1].max);
      } else {
        copyOfStays = copyOfStays.filter((stay: StayInterface) => stay.price * coefficient > filters.priceRange.min && stay.price * coefficient <= filters.priceRange.max);
        console.log(copyOfStays);
      }
    }

    if (filters.propertyType.length !== 0) {
      console.log('has property type');
      copyOfStays = copyOfStays.filter((stay: StayInterface) => filters.propertyType.some((filter: FilterOptionInterface) => filter.value === stay.propertyType));
    }

    if (filters.rating.length !== 0) {
      copyOfStays = copyOfStays.filter((stay: StayInterface) => filters.rating.some((filter: FilterOptionInterface) => filter.value === Math.round(stay.rating)));
    }

    if (filters.amenities.length !== 0) {
      copyOfStays = copyOfStays.filter((stay: StayInterface) => filters.amenities.some((filter: FilterOptionInterface) => {
        if (stay.amenities.some((amenity: AmenityInterface) => {
          return amenity.name === filter.name;
        })) {
          return stay;
        }

        return null;
      }));
    }

    switch(sortBy) {
    case 'Rating from 1 to 5':
      copyOfStays.sort((a, b) => a.rating - b.rating);
      break;
    case 'Rating from 5 to 1':
      copyOfStays.sort((a, b) => b.rating - a.rating);
      break;
    case 'Name A-Z':
      copyOfStays.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      break;
    case 'Name Z-A':
      copyOfStays.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
      break;
    case 'Price: high to low':
      copyOfStays.sort((a, b) => b.price - a.price);
      break;
    case 'Price: low to high':
      copyOfStays.sort((a, b) => a.price - b.price);
      break;
    default:
      copyOfStays.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    }

    return copyOfStays;
  };

  const sortedAndFilteredStays = useMemo(() => {
    return sortAndFilterStays();
  }, [filters, stays, sortBy, coefficient]);

  return sortedAndFilteredStays;
};

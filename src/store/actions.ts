export const incrementGuest = (field: string) => {
  return {
    type: 'INCREMENT_GUEST',
    payload: field,
  };
};

export const decrementGuest = (field: string) => {
  return {
    type: 'DECREMENT_GUEST',
    payload: field,
  };
};

export const updateDeparture = (departure: any) => ({
  type: 'UPDATE_DEPARTURE',
  payload: departure,
});

export const updateDates = (dates: any) => ({
  type: 'UPDATE_DATES',
  payload: dates,
});

export const updateFilters = (filters: any) => ({
  type: 'UPDATE_FILTERS',
  payload: filters,
});

export const clearFilters = (filters: any) => ({
  type: 'CLEAR_FILTERS',
  payload: filters,
});

export const updateSort = (sortBy: string) => ({
  type: 'UPDATE_SORT',
  payload: sortBy,
});

export const updateProperties = (likedProperties: any) => ({
  type: 'UPDATE_PROPERTIES',
  payload: likedProperties,
});

export const updateAuth = (authValue: boolean) => ({
  type: 'UPDATE_AUTH',
  payload: authValue,
});










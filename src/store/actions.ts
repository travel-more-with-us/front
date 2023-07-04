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
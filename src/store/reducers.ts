const initialState = {
  guests: {
    adults: 2,
    children: 0,
    rooms: 1,
  },
  departure: '',
  dates: {
    startDate: null,
    endDate: null,
  },
};

const guestsReducer = (state = initialState.guests as any, action: any) => {
  switch (action.type) {
  case 'INCREMENT_GUEST':
    if (action.payload === 'rooms' && state.rooms < 4) {
      return {
        ...state,
        rooms: state.rooms + 1,
      };
    } else if (action.payload !== 'rooms') {
      const totalGuests = state.adults + state.children;
      const maxGuests = state.rooms * 4;
      if (totalGuests < maxGuests) {
        return {
          ...state,
          [action.payload]: state[action.payload] + 1,
        };
      }
    }
    return state;
  case 'DECREMENT_GUEST':
    if (action.payload !== 'rooms' && state[action.payload] > 0) {
      return {
        ...state,
        [action.payload]: state[action.payload] - 1,
      };
    }
    return state;
  default:
    return state;
  }
};

const departureReducer = (state = initialState.departure, action: any) => {
  switch (action.type) {
  case 'UPDATE_DEPARTURE':
    return action.payload;
  default:
    return state;
  }
};

const datesReducer = (state = initialState.dates, action: any) => {
  switch (action.type) {
  case 'UPDATE_DATES':
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export const reducers = {
  date: datesReducer,
  departure: departureReducer,
  guests: guestsReducer
};
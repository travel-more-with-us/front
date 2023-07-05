const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const initialState = {
  guests: {
    adults: 2,
    children: 0,
    rooms: 1,
  },
  departure: {
    city: '',
    country: ''
  },
  dates: {
    startDate: today,
    endDate: tomorrow
  },
  filters: {},
  sort: '',
};

const guestsReducer = (state = initialState.guests as any, action: any) => {
  switch (action.type) {
  case 'INCREMENT_GUEST':
    if (action.payload === 'rooms' && state.rooms < 4 && state.rooms === state.adults) {
      return {
        ...state,
        rooms: state.rooms + 1,
        adults: state.adults + 1,
      };
    } else if (action.payload === 'rooms' && state.rooms < 4 && state.rooms < state.adults) {
      return {
        ...state,
        rooms: state.rooms + 1,
      };
    }
    else if (action.payload === 'children' && state.children < state.adults * 3) {
      return {
        ...state,
        children: state.children + 1,
      };
    } else if (action.payload !== 'rooms' && action.payload !== 'children') {
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
    if (action.payload === 'children' && state.children > 0) {
      return {
        ...state,
        children: state.children - 1,
      };
    } else if (state[action.payload] > 1) {
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

const filtersReducer = (state = initialState.filters, action: any) => {
  switch (action.type) {
  case 'UPDATE_FILTERS':
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

const sortReducer = (state = initialState.sort, action: any) => {
  switch (action.type) {
  case 'UPDATE_SORT':
    return action.payload;
  default:
    return state;
  }
};

export const reducers = {
  dates: datesReducer,
  departure: departureReducer,
  guests: guestsReducer,
  filters: filtersReducer,
  sort: sortReducer,
};
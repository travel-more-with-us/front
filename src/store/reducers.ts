import { Reducer } from 'redux';
import { DatesAction, DatesState, DepartureAction, DepartureState, FiltersAction, GuestsAction, GuestsState, PropertiesAction, SortAction, SortState } from '../types/reduxTypes';

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
  properties: [],
  isAuth: false,
};

const guestsReducer: Reducer<GuestsState, GuestsAction> = (state = initialState.guests as GuestsState, action: GuestsAction) => {
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

const departureReducer: Reducer<DepartureState, DepartureAction> = (state = initialState.departure, action: DepartureAction) => {
  switch (action.type) {
  case 'UPDATE_DEPARTURE':
    return action.payload;
  default:
    return state;
  }
};

const datesReducer: Reducer<DatesState, DatesAction> = (state = initialState.dates, action: DatesAction) => {
  switch (action.type) {
  case 'UPDATE_DATES':
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

const filtersReducer: Reducer<any, FiltersAction> = (state = initialState.filters, action: FiltersAction) => {
  switch (action.type) {
  case 'UPDATE_FILTERS':
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

const sortReducer: Reducer<SortState, SortAction> = (state = initialState.sort, action: SortAction) => {
  switch (action.type) {
  case 'UPDATE_SORT':
    return action.payload;
  default:
    return state;
  }
};

const propertiesReducer: Reducer<any, PropertiesAction> = (state = initialState.properties, action: PropertiesAction) => {
  switch (action.type) {
  case 'UPDATE_PROPERTIES':
    return [...action.payload ];
  default:
    return state;
  }
};

const authReducer = (state = initialState.isAuth, action: any) => {
  switch (action.type) {
  case 'UPDATE_AUTH':
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
  properties: propertiesReducer,
  auth: authReducer,
};
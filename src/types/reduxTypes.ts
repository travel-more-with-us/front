export interface StateInterface {
  guests: GuestsState;
  dates: DatesState;
  departure: DepartureState;
  sort: SortState;
  filters: any;
  properties: any;
  auth: boolean;
}

export interface GuestsState {
  adults: number;
  children: number;
  rooms: number;
}

export interface DepartureState {
  city: string;
  country: string;
}

export interface DatesState {
  startDate: Date | null;
  endDate: Date | null;
}

export type SortState = string;

interface IncrementGuestAction {
  type: 'INCREMENT_GUEST';
  payload: 'rooms' | 'children' | 'adults';
}

interface DecrementGuestAction {
  type: 'DECREMENT_GUEST';
  payload: 'rooms' | 'children' | 'adults';
}

interface UpdateDepartureAction {
  type: 'UPDATE_DEPARTURE';
  payload: DepartureState;
}

interface UpdateDatesAction {
  type: 'UPDATE_DATES';
  payload: DatesState;
}

interface UpdateFiltersAction {
  type: 'UPDATE_FILTERS';
  payload: any;
}

interface ClearFiltersAction {
  type: 'CLEAR_FILTERS';
  payload: any;
}

interface UpdateSortAction {
  type: 'UPDATE_SORT';
  payload: SortState;
}

interface UpdatePropertiesAction {
  type: 'UPDATE_PROPERTIES';
  payload: any;
}

export type GuestsAction =
  | IncrementGuestAction
  | DecrementGuestAction;

export type DepartureAction =
  | UpdateDepartureAction;

export type DatesAction =
  | UpdateDatesAction;

export type FiltersAction =
  | UpdateFiltersAction
  | ClearFiltersAction;

export type SortAction =
  | UpdateSortAction;

export type PropertiesAction =
  | UpdatePropertiesAction;
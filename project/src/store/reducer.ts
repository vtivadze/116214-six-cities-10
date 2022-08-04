import { createReducer } from '@reduxjs/toolkit';

import {
  INITIAL_CITY,
  DEFAULT_SORTING_TYPE,
  AuthorizationStatus,
} from '../constants';
import { Offer } from '../types/offer';
import {
  changeCity,
  loadOffers,
  changeSortingType,
  requireAuthorization,
  setError,
  setDataLoadedStatus,
  setOfferId,
} from './action';

type InitialState = {
  city: string;
  offers: Offer[];
  sortingType: string;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isDataLoaded: boolean;
  offerId: string | null;
};

const initialState: InitialState = {
  city: INITIAL_CITY,
  offers: [],
  sortingType: DEFAULT_SORTING_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoaded: false,
  offerId: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortingType, (state, action) => {
      state.sortingType = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setOfferId, (state, action) => {
      state.offerId = action.payload;
    });
});

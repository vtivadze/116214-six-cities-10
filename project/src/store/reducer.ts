import { createReducer } from '@reduxjs/toolkit';

import { INITIAL_CITY, DEFAULT_SORTING_TYPE } from '../constants';
import { changeCity, setOffers, changeSortingType } from './action';

const initialState = {
  city: INITIAL_CITY,
  offers: [],
  sortingType: DEFAULT_SORTING_TYPE,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state) => {
      state.offers = offers;
    })
    .addCase(changeSortingType, (state, action) => {
      state.sortingType = action.payload;
    });
});

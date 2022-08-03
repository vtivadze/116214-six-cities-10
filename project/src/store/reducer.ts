import { createReducer } from '@reduxjs/toolkit';

import { INITIAL_CITY, DEFAULT_SORTING_TYPE } from '../constants';
import { changeCity, loadOffers, changeSortingType } from './action';

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
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortingType, (state, action) => {
      state.sortingType = action.payload;
    });
});

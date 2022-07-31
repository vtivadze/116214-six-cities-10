import { createReducer } from '@reduxjs/toolkit';

import { offers } from '../mocks/offers';
import { changeCity, setOffers } from './action';

const city = 'Paris';

const initialState = {
  city,
  offers,
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state) => {
      state.offers = offers;
    });
});

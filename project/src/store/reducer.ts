import { createReducer } from '@reduxjs/toolkit';

import { offers } from '../mocks/offers';
import { changeCity, getOffers } from './action';

const city = 'Amsterdam';

const initialState = {
  city,
  offers,
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = offers.filter((offer) => offer.city.name === action.payload);
    });
});

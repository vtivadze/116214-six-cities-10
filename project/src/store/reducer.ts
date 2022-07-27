import { createReducer } from '@reduxjs/toolkit';

import { offers } from '../mocks/offers';
import { initialCoordinates } from '../constants';

const city = {
  name: 'Amsterdam',
  ...initialCoordinates,
};

const initialState = {
  city,
  offers,
};

export const updateStore = createReducer(initialState, (builder) => {

});

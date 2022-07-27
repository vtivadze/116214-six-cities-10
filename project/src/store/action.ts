import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('CHANGE_CITY', (city) => ({
  payload: city,
}));

export const getOffers = createAction('GET_OFFERS', (city) => ({
  payload: city,
}));

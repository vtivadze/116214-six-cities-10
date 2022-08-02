import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('changeCity', (city) => ({
  payload: city,
}));

export const setOffers = createAction('setOffers');

export const changeSortingType = createAction('changeSortingType', (sortingType) => ({
  payload: sortingType,
}));

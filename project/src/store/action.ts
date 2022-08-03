import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('changeCity', (city) => ({
  payload: city,
}));

export const loadOffers = createAction('loadOffers');

export const changeSortingType = createAction('changeSortingType', (sortingType) => ({
  payload: sortingType,
}));

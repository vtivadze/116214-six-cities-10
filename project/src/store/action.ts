import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../constants';

export const changeCity = createAction('changeCity', (city) => ({
  payload: city,
}));

export const loadOffers = createAction('loadOffers', (offers) => ({
  payload: offers,
}));

export const loadReviews = createAction('loadReviews', (reviews) => ({
  payload: reviews,
}));

export const changeSortingType = createAction('changeSortingType', (sortingType) => ({
  payload: sortingType,
}));

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setError = createAction<string | null>('setError');

export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');

export const setOfferId = createAction('setOfferId', (offerId) => ({
  payload: offerId,
}));

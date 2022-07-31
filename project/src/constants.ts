export const STARS_COUNT = 5;
export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';
export const ZOOM_LEVEL = 10;
export const INITIAL_CITY = 'Paris';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const sortingType = {
  POPULAR: 'Popular',
  PRICE_ASCENDING: 'Price: low to high',
  PRICE_DESCENDING: 'Price: high to low',
  RATING_DESCENDING: 'Top rated first',
};

export const DEFAULT_SORTING_TYPE = sortingType.POPULAR;


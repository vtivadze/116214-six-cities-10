export const PLACE_COUNT = 312;
export const STARS_COUNT = 5;
export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';
export const ZOOM_LEVEL = 10;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export const initialCoordinates = {
  lat: 52.36961548135118,
  lng: 4.904384736819395,
};

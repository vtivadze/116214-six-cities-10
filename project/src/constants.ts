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

export const cities = [
  {
    name: 'Paris',
    lat: 48.91283939320031,
    lng: 2.350601814812922,
  },
  {
    name: 'Cologne',
    lat: 50.998104496128335,
    lng: 6.963300378398547,
  },
  {
    name: 'Brussels',
    lat: 50.95432774923024,
    lng: 4.326333436354579,
  },
  {
    name: 'Amsterdam',
    lat: 52.36961548135118,
    lng: 4.904384736819395,
  },
  {
    name: 'Hamburg',
    lat: 53.598960404627,
    lng: 9.983960189970864,
  },
  {
    name: 'Dusseldorf',
    lat: 51.5225460047204,
    lng: 6.813198467783883,
  },
];

export const initialCoordinates = {
  lat: 52.36961548135118,
  lng: 4.904384736819395,
};

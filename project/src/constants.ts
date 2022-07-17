export const PLACE_COUNT = 312;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/room',
}

export const routes: {[key: string]: string} = {
  '/': 'main',
  '/login': 'login',
  '/favorites': 'favorites',
  '/offer': 'room',
};

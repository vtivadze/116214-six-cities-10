export const PLACE_COUNT = 312;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/root',
}

export const routes: {[key: string]: string} = {
  '/': 'main',
  '/login': 'login',
  '/favorites': 'favorites',
  '/offer': 'room',
};

export const pageClassNames: {[key: string]: string} = {
  'main': 'page page--gray page--main',
  'login': 'page page--gray page--login',
  'favorites': 'page',
  'room': 'page',
};

export const hasFooter: string[] = [
  'favorites',
];

export const headerLogoConfig = {
  destination: 'header',
  isActive: true,
  width: '81',
  height: '41'
};

export const footerLogoConfig = {
  destination: 'footer',
  isActive: false,
  width: '64',
  height: '33'
};

export const locations = [
  'Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hambrug', 'Dusseldorf'
];

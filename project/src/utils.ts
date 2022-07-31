import { Offer } from './types/offer';
import { CityCoordinates, MapCoordinates } from './types/location-coordinates';

const ONE_STAR_PERCENTAGE = 20;

export const calculateRatingPercentage = (rating: number) =>
  rating * ONE_STAR_PERCENTAGE;

export const getCityOffers = (offers: Offer[], city: string) =>
  offers.filter((offer) => offer.city.name === city);

export const getMapCenterCoordinates = (location: CityCoordinates): MapCoordinates => ({
  lat: location.latitude,
  lng: location.longitude,
});

export const offersCompareFunction: {[key: string]: (a: Offer, b: Offer) => number} = {
  'Price: low to high': (a, b) => a.price - b.price,
  'Price: high to low':(a, b) => b.price - a.price,
  'Top rated first': (a, b) => b.rating - a.rating,
};

export const sortOffers = (offers: Offer[], sortingType: string) => [...offers].sort(offersCompareFunction[sortingType]);

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

import { Offer } from './types/offer';

const ONE_STAR_PERCENTAGE = 20;

export const calculateRatingPercentage = (rating: number) =>
  rating * ONE_STAR_PERCENTAGE;

export const getActiveOffers = (offers: Offer[], city: string) =>
  offers.filter((offer) => offer.city.name === city);

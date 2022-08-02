import { Offer } from './types/offer';
import { CityCoordinates, MapCoordinates } from './types/location-coordinates';
import { State } from './types/state';
import { SortingType } from './constants';

const ONE_STAR_PERCENTAGE = 20;

export const calculateRatingPercentage = (rating: number) =>
  rating * ONE_STAR_PERCENTAGE;

export const getCityOffers = (offers: Offer[], city: string) =>
  offers.filter((offer) => offer.city.name === city);

export const getMapCenterCoordinates = (
  location: CityCoordinates
): MapCoordinates => ({
  lat: location.latitude,
  lng: location.longitude,
});

export const offersCompareFunction: {
  [key: string]: (a: Offer, b: Offer) => number;
} = {
  [SortingType.PriceAscending]: (a, b) => a.price - b.price,
  [SortingType.PriceDescending]: (a, b) => b.price - a.price,
  [SortingType.RatingDescending]: (a, b) => b.rating - a.rating,
};

export const sortOffers = (offers: Offer[], sortingType: string) =>
  [...offers].sort(offersCompareFunction[sortingType]);

export const selectCity = (state: State) => state.city;
export const selectOffers = (state: State) => state.offers;
export const selectSortingType = (state: State) => state.sortingType;

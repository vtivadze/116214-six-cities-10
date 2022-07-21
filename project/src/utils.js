export const groupFavoritesByCity = (favoriteOffers) => {
  const favorites = {};
  favoriteOffers.forEach((offer) => {
    const cityName = offer.city.name;
    if (!favorites[cityName]) {
      favorites[cityName] = [];
    }
    favorites[cityName].push(offer);
  });
  const cityFavorites = Object.entries(favorites);
  return cityFavorites;
};

export const calculateRatingPercentage = (rating) => Math.round(rating) * 20;

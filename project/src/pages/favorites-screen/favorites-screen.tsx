import { Offer } from '../../types/offer';
import Header from '../../components/header/header';
import OfferItemFavorite from '../../components/offer-item-favorite/offer-item-favorite';

type FavoriteScreenProp = {
  favoriteOffers: Offer[];
};

export interface Favorites {
  [key: string]: Offer[];
}

function groupFavoritesByCity(favoriteOffers: Offer[]) {
  const favorites: Favorites = {};
  favoriteOffers.forEach((offer) => {
    const cityName = offer.city.name;
    if (!favorites[cityName]) {
      favorites[cityName] = [];
    }
    favorites[cityName].push(offer);
  });
  const cityFavorites = Object.entries(favorites);
  return cityFavorites;
}

function FavoritesScreen({ favoriteOffers }: FavoriteScreenProp): JSX.Element {
  const cityFavorites = groupFavoritesByCity(favoriteOffers);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffers.length > 0 ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {cityFavorites.map(([cityName, favorites]) => (
                  <li key={cityName} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="/">
                          <span>{cityName}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {favorites.map((favorite: Offer) => (
                        <OfferItemFavorite key={favorite.id} offer={favorite} />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future
                  trips.
                </p>
              </div>
            </section>
          )}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;

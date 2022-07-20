import { Offer } from '../../types/offer';
import Header from '../../components/header/header';
import OfferItem from '../../components/offer-item/offer-item';

type FavoriteScreenProp = {
  offers: Offer[];
};

export interface Favorites {
  [key: string]: Offer[];
}

function FavoritesScreen({ offers }: FavoriteScreenProp): JSX.Element {
  const favorites: Favorites = {};
  offers.forEach((offer) => {
    const cityName = offer.city.name;
    if (!favorites[cityName]) {
      favorites[cityName] = [];
    }
    favorites[cityName].push(offer);
  });
  const favoritesData = Object.entries(favorites);
  // eslint-disable-next-line no-console
  console.log(favoritesData);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {offers.length > 0 ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoritesData.map(([cityName, favs]) => (
                  <li key={cityName} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="/">
                          <span>{cityName}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {favs.map((fav) => (
                        <OfferItem key={fav.id} offer={fav} pageName="favorites" />
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

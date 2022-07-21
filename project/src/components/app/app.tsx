import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import Page404Screen from '../../pages/page-404-screen/page-404-screen';
import PrivateRoute from '../private-route/private-route';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

import { AppRoute } from '../../constants';

type AppProps = {
  placeCount: number;
  offers: Offer[];
  reviews: Review[];
};

function App({ placeCount, offers, reviews }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen placeCount={placeCount} offers={offers} />}
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesScreen favoriteOffers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen reviews={reviews} />}
        />
        <Route path="*" element={<Page404Screen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

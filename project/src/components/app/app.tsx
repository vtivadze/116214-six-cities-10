import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../constants';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import Page404Screen from '../../pages/page-404-screen/page-404-screen';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  placeCount: number;
};

function App({ placeCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen placeCount={placeCount} />}
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<RoomScreen />} />
        <Route path="*" element={<Page404Screen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

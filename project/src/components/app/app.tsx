import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../layout/layout';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import Page404Screen from '../../pages/page-404-screen/page-404-screen';

type AppProps = {
  placeCount: number;
}

function App({placeCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainScreen placeCount={placeCount} />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/favorites' element={<FavoritesScreen />} />
          <Route path='/offer' element={<RoomScreen />} />
          <Route path='*' element={<Page404Screen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

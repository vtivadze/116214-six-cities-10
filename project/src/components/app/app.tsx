import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../layout/layout';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

function App({placeCount}: {placeCount: number}): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainScreen placeCount={placeCount} />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/favorites' element={<FavoritesScreen />} />
          <Route path='/offer/:id' element={<RoomScreen />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

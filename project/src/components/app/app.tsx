import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';

function App({placeCount}: {placeCount: number}): JSX.Element {
  return <MainScreen placeCount={placeCount} />;
}

export default App;

import { Outlet } from 'react-router-dom';
import Icons from '../icons/icons';

function Layout(): JSX.Element {
  return (
    <>
      <Icons />
      <Outlet />
    </>
  );
}

export default Layout;

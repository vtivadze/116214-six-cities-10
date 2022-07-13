import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import {routes, pageClassNames, hasFooter} from '../../constants';

function Layout(): JSX.Element {
  const currentPath = useLocation();
  const currentElementName = routes[currentPath.pathname];
  const pageClassName = pageClassNames[currentElementName];

  return (
    <div className={pageClassName}>
      <Header currentElementName={currentElementName} />
      <Outlet />
      {hasFooter.includes(currentElementName) && <Footer />}
    </div>
  );
}

export default Layout;

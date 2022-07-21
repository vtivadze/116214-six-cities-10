import { Navigate } from 'react-router-dom';

import { AppRoute } from '../../constants';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const isLogin = true;

  return isLogin ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;

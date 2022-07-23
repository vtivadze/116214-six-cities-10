import { Navigate } from 'react-router-dom';

import { AppRoute } from '../../constants';

type Props = {
  children: JSX.Element;
}

function PrivateRoute({children}: Props): JSX.Element {
  const isLogin = true;

  return isLogin ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;

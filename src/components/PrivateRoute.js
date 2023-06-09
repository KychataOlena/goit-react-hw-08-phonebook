import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export const PrivatRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isRefreshing && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

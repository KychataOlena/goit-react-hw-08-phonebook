import { Route, Routes } from 'react-router-dom';
import { Contacts } from '../../pages/Contacts/Contacts';
import { Register } from '../../pages/Register/Register';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { Login } from '../../pages/Login/Login';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/auth-operations';
import { PrivatRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
import { useAuth } from 'hooks/useAuth';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              path="register"
              element={
                <PublicRoute component={Register} redirectTo="/contacts" />
              }
            />
            <Route
              path="login"
              element={<PublicRoute component={Login} redirectTo="/contacts" />}
            />
            <Route
              path="contacts"
              element={<PrivatRoute component={Contacts} redirectTo="/login" />}
            />
          </Route>
        </Routes>
      </>
    )
  );
};

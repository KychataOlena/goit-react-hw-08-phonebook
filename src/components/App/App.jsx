import { Route, Routes } from 'react-router-dom';
import { Contacts } from '../../pages/Contacts/Contacts';
import { Register } from '../../pages/Register/Register';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { Login } from '../../pages/Login/Login';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/auth-operations';
import { PrivatRoute } from 'components/PrivateRoute';
import authSelectors from 'redux/auth/auth-selectors';
import { PublicRoute } from 'components/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

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

// import { ContactForm } from '../ContactForm/ContactForm';
// import { ContactList } from '../ContactList/ContactList';
// import { Filter } from '../Filter/Filter';
// import { Wrapper } from './App.styled';

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { selectIsLoading, selectError } from 'redux/selectors';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Wrapper>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       {isLoading && !error && <b>Request in progress...</b>}

//       <ContactList />
//     </Wrapper>
//   );
// };

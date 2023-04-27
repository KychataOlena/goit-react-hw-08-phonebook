import { Route, Routes } from 'react-router-dom';
import { Contacts } from '../../pages/Contacts/Contacts';
import { Register } from '../../pages/Register/Register';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { Login } from '../../pages/Login/Login';
// import { Wrapper } from './App.styled';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="register" element={<Register />} />
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
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

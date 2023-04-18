import { Outlet } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Wrapper, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <Header>
        <nav>
          <Link to="/">Register</Link>
          <Link to="/movies">Contacts</Link>
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
// import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Wrapper, Header } from './SharedLayout.styled';
import { UserMenu } from 'components/UserMenu/userMenu';
import { Navigation } from 'components/Navigation/Navigation';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Wrapper>
      <Header>
        {isLoggedIn ? <UserMenu /> : <Navigation />}
        {/* {isLoggedIn ? <UserMenu /> : <Navigation />} */}
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

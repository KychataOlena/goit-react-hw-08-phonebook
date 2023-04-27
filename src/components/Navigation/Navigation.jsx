import { Link } from './Navigation.styled';
export const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </>
  );
};

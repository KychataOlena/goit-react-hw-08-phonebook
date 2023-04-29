import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
export const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>mango@mail.com</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        LogOut
      </button>
    </div>
  );
};

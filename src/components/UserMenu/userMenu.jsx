import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { UserButton, UserContainer, UserText } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <UserContainer>
      <UserText>mango@mail.com</UserText>
      <UserButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        LogOut
      </UserButton>
    </UserContainer>
  );
};

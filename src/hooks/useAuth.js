import { useSelector } from 'react-redux';
import {
  getIsLoggedIn,
  getIsRefreshing,
  getUserName,
} from '../redux/auth/auth-selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(getIsLoggedIn),
    isRefreshing: useSelector(getIsRefreshing),
    user: useSelector(getUserName),
  };
};

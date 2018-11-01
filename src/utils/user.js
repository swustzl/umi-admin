import { userRole } from './config';

export const getRole = () => {
  const user = getUser();
  return user && user.role ? userRole[user.role] : null;
};

export const getUser = () => {
  const user = localStorage.getItem('dgopUser');
  return user ? JSON.parse(user) : {};
};

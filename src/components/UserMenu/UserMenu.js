import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectUser } from 'redux/selectors';
import { Logout, MenuContainer, MenuMail } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <MenuContainer>
      <MenuMail>Welcome, {user.email}</MenuMail>
      <Logout type="button" onClick={() => dispatch(logout())}>
        Logout
      </Logout>
    </MenuContainer>
  );
};

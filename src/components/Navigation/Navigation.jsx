import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { NavBox, NavItem } from './Navigation.styled';
import { selectIsgettingCurrent } from 'redux/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isFetchingCurrentUser = useSelector(selectIsgettingCurrent);

  return (
    <NavBox>
      <div>
        <NavItem to={'/'}>Home</NavItem>
        <NavItem to={'contacts'}>Contacts</NavItem>
      </div>

      {!isFetchingCurrentUser && (
        <div>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <div>
              <NavItem to={'register'}>Register</NavItem>
              <NavItem to={'login'}>Log in</NavItem>
            </div>
          )}
        </div>
      )}
    </NavBox>
  );
};

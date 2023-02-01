import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
// import { Container, Welcome } from './Home.styled';
import { selectIsgettingCurrent } from 'redux/auth/selectors';

export const Home = () => {
  const user = useSelector(selectUser);
  const isFetchingCurrentUser = useSelector(selectIsgettingCurrent);

  return (
    !isFetchingCurrentUser && (
      <div>
        <h2>Welcome, {user.name ?? 'somebody'}!</h2>
      </div>
    )
  );
};

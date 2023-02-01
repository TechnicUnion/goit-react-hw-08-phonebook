import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsgettingCurrent, selectIsLoggedIn } from 'redux/selectors';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsgettingCurrent);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
};

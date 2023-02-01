import { lazy, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout } from './Layout';
import { Register } from '../pages/registration';
import { Login } from '../pages/login/Login';
import { Home } from 'pages/home';
import { getCurrentUser } from 'redux/auth/authOperations';
import { PrivateRoute, PublicRoute } from 'routes';
import { error } from 'redux/auth/authSlice';

const Contacts = lazy(() =>
  import('pages/contacts').then(module => ({
    ...module,
    default: module.Contacts,
  }))
);

function App() {
  const [currentPath, setCurrentPath] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(error());
  }, [currentPath, dispatch]);

  const handleCurrentPath = path => {
    setCurrentPath(path);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <Register setPath={handleCurrentPath} />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <Login setPath={handleCurrentPath} />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import { lazy, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout } from './Layout';
import { Register } from '../pages/Register';
import { Login } from 'pages/Login';
import { Home } from 'pages/Home';
import { getCurrentUser } from 'redux/auth/authOperations';
import { PrivateRoute, PublicRoute } from 'routes';
import { error } from 'redux/auth/authSlice';

const Contacts = lazy(() =>
  import('pages/Contacts').then(module => ({
    ...module,
    default: module.Contacts,
  }))
);

function App() {
  const [currentPath, setCurrentPath] = useState(null);
  const dispatch = useDispatch();
  console.log('hello');
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

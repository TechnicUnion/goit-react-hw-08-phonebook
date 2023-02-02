import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { AppBar } from '../AppBar';
import { Navigation } from 'components/Navigation';

export const Layout = () => {
  return (
    <Container>
      <AppBar>
        <Navigation />
      </AppBar>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

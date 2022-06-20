import React from 'react';
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';

import {
  Dashboard,
  Detail,
  LandingPage,
  LoginPage
} from 'pages';
import { Header } from 'components';
import { history } from 'helpers';
import { Text } from 'components';
import { Globalstyle } from 'constant';
import AuthRoutes from './AuthRoute';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <HistoryRouter history={ history }>
      <Header />
      <Globalstyle />
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
        <Route element={ <AuthRoutes /> }>
          <Route path='/login' element={ <LoginPage /> } />
        </Route>
        <Route element={ <PrivateRoute /> }>
          <Route path='/dashboard' element={ <Dashboard /> } />
          <Route path='/detail' element={ <Detail /> } />
        </Route>
        <Route path='*' element={ <Text.H1>404 NOT FOUND</Text.H1> } />
      </Routes>
    </HistoryRouter>
  );
};

export default AppRouter;

import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import {
  Dashboard,
  Detail,
  LandingPage,
} from 'pages';
import { Header } from 'components';
import { Text } from 'components';
import { Globalstyle } from 'constant';
import AuthRoutes from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import LoginPage from 'pages/LoginPage';
import { NavigationSetter } from 'components/NavigationSetter';

const AppRouter:React.FC = () => {
  return (
    <BrowserRouter window={ window }>
      { /* DO NOT DELETE THIS COMPONENT */ }
      <NavigationSetter />
      { /* DO NOT DELETE ABOVE COMPONENT */ }

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
    </BrowserRouter >
  );
};

export default AppRouter;

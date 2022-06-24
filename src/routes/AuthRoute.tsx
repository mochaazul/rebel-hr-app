import React from 'react';
import { useTypedSelector } from 'hooks';
import {
  Navigate,
  Outlet
} from 'react-router-dom';
import { UserState } from 'interface';

const AuthRoute = () => {

  const { user } = useTypedSelector<UserState>('user');

  if (user.accessToken) {
    return <Navigate to='/' replace />;
  }
  return <Outlet />;
};

export default AuthRoute;
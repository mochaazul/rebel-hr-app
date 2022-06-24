import React from 'react';
import { useTypedSelector } from 'hooks';
import {
  Navigate,
  Outlet
} from 'react-router-dom';
import { UserState } from 'interface';

const PrivateRoute = () => {

  const { user } = useTypedSelector<UserState>('user');

  if (user.accessToken) {
    return <Outlet />;
  }
  return <Navigate to='/login' replace />;
};

export default PrivateRoute;
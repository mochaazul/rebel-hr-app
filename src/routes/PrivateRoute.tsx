import React from 'react';
import { useTypedSelector } from 'hooks';
import {
  Navigate,
  Outlet
} from 'react-router-dom';

const PrivateRoute = () => {

  const { user } = useTypedSelector(state => state.user);

  if (user.accessToken) {
    return <Outlet />;
  }
  return <Navigate to='/login' replace />;
};

export default PrivateRoute;
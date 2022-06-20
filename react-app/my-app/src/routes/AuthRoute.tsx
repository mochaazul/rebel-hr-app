import React from 'react';
import { useTypedSelector } from 'hooks';
import {
    Navigate,
    Outlet
} from 'react-router-dom';

const AuthRoute = () => {

    const { user } = useTypedSelector(state => state.user);

    if (user.accessToken) {
        return <Navigate to='/' replace />;
    }
    return <Outlet />;
};

export default AuthRoute;
import { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';

const middleware: Middleware =
    (api: MiddlewareAPI) => (next) => (action) => {
        if (!navigator.onLine && action.type.includes('rejected')) {
            // your cool toast
            alert('check your internet connection');
        }

        return next(action);
    };

export default middleware;
import React from 'react';
import {
	Routes,
	Route,
	unstable_HistoryRouter as HistoryRouter,
	Navigate,
	Outlet
} from 'react-router-dom';

import {
	Dashboard,
	Detail,
	LandingPage
} from 'pages';
import { Navigation } from 'components';
import { history, localStorage } from 'helpers';
import UiDemoPage from 'pages/UiDemo';

const PrivateRoute = () => localStorage.getToken() ? <Outlet /> : <Navigate to='/' replace />;

const AppRouter = () => {
	return (
		<HistoryRouter history={ history }>
			<Navigation />
			<Routes>
				<Route path='/uidemo' element= {<UiDemoPage />} />
				<Route path='/' element={ <LandingPage /> } />
				<Route element={ <PrivateRoute /> }>
					<Route path='/dashboard' element={ <Dashboard /> } />
					<Route path='/detail' element={ <Detail /> } />
				</Route>
			</Routes>
		</HistoryRouter>
	);
};

export default AppRouter;

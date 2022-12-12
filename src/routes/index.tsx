import React from 'react';
import {
	Routes,
	Route,
	BrowserRouter,
} from 'react-router-dom';
import {
	Dashboard,
	LandingPage,
} from 'pages';
import { Text } from 'components';
import { Globalstyle } from 'constant';
import AuthRoutes from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import { NavigationSetter } from 'components/NavigationSetter';
import LeaveTypePage from 'pages/LeaveTypes';
import EmployeePage from 'pages/Employee';
import UserPage from 'pages/Users';

const AppRouter:React.FC = () => {
	return (
		<BrowserRouter window={ window }>
			{ /* DO NOT DELETE THIS COMPONENT */ }
			<NavigationSetter />
			{ /* DO NOT DELETE ABOVE COMPONENT */ }

			<Globalstyle />
			<Routes>

				<Route path='/' element={ <LandingPage /> } />

				<Route element={ <AuthRoutes /> }>
					<Route path='/login' element={ <LandingPage /> } />
				</Route>

				<Route element={ <PrivateRoute /> }>
					<Route path='/dashboard' element={ <Dashboard /> } />
					<Route path='/leave-type' element={ <LeaveTypePage /> } />
					<Route path='/employee' element={ <EmployeePage/> } />
					<Route path='/user' element={ <UserPage/> }/>
				</Route>
				
				<Route path='*' element={ <Text.H1>404 NOT FOUND</Text.H1> } />
			</Routes>
		</BrowserRouter >
	);
};

export default AppRouter;

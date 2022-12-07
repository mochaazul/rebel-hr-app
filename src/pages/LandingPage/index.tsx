import React from 'react';
import LandingPageStyle from './style';
import { Card } from 'antd';
import LoginForm from './LoginForm';

const LandingPage = () => {
	// const { user }  = useTypedSelector<UserState>('user');
	// const removeUser = useAppDispatch(removeUserData);
	// const editName = useAppDispatch<UserData>(editNameAction);
	// const { navigate } = navigation();

	// const text = user.accessToken ? 'Logout' : 'Login';

	return (
		<LandingPageStyle>
			<Card size='small' title='Login' style={ { width: 400 } }>
				<LoginForm />
			</Card>
		</LandingPageStyle>
	);
};

export default LandingPage;

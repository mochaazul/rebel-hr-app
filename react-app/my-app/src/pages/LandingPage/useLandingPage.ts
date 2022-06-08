import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { UserActions } from 'stores/actions';

const useLandingPage = () => {
	const dispatch = useDispatch();

	const [loginForm, setLoginForm] = useState({
		email: '',
		password: ''
	});

	const onClickLogin = () => {
		dispatch(UserActions.login(loginForm));
	};

	const onChangeInput = (e?: React.ChangeEvent<HTMLInputElement>) => {
		if (e) {
			const { name, value } = e.target;
			setLoginForm({
				...loginForm,
				[name]: value
			});
		}
	};

	return {
		onClickLogin,
		onChangeInput
	};
};

export default useLandingPage;

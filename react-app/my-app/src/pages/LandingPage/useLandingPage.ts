import { useState, useEffect } from 'react';

import { login } from 'stores/actions';

import { useAppDispatch, useNavigateApp } from 'hooks';

const useLandingPage = () => {

	const dispatch = useAppDispatch();
	const navigate = useNavigateApp();
	const [loginForm, setLoginForm] = useState({
		username: '',
		password: ''
	});

	useEffect(() => {
		// dispatch(setUserData(loginResponse.data.data));
		// navigate('/dashboard');
	}, []);

	const onClickLogin = () => {
		dispatch(login(loginForm));
	};

	const onChangeInput = (e?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined) => {
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

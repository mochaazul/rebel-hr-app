import { useState, useEffect } from 'react';

import { login } from 'stores/actions';
import { useAppDispatch, useNavigateApp } from 'hooks';
import {
	requiredRule,
	minLengthRule,
	maxLengthRule,
	createFieldConfig
} from 'utils';

export const loginField = {
	email: {
		...createFieldConfig({
			name: "email",
			type: "email"
		}),
		validationRules: [
			requiredRule("email"),
			minLengthRule("email", 10),
			maxLengthRule("email", 25)
		]
	},
	password: {
		...createFieldConfig({
			name: "password",
			type: "password"
		}),
		validationRules: [
			requiredRule("password"),
			minLengthRule("password", 8),
			maxLengthRule("password", 20)
		]
	},
};


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
		onChangeInput,
		loginField
	};
};

export default useLandingPage;

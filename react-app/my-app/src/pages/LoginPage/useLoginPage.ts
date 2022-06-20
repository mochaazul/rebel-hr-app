import { useState } from 'react';

import { login } from 'stores/actions';
import { useAppDispatch } from 'hooks';
import {
	requiredRule,
	minLengthRule,
	maxLengthRule,
	createFieldConfig,
	emailRule
} from 'helpers';

export const loginField = {
	email: {
		...createFieldConfig({
			name: "email",
			type: "email"
		}),
		validationRules: [
			requiredRule("email"),
			minLengthRule("email", 10),
			maxLengthRule("email", 25),
			emailRule()
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
	const [loginForm, setLoginForm] = useState({
		username: '',
		password: ''
	});
	const onClickLogin = ({ username, password }: any) => {
		dispatch(login({ username, password }));
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

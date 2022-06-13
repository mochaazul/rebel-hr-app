import { useState, useEffect } from 'react';

import { useLoginAdminMutation, setUserData } from 'stores/actions';

import { useAppDispatch, useNavigateApp } from 'hooks';
import { StatCode } from 'interface';

const useLandingPage = () => {

	const dispatch = useAppDispatch();
	const navigate = useNavigateApp();
	const [loginAdmin, loginResponse] = useLoginAdminMutation();
	const [loginForm, setLoginForm] = useState({
		username: '',
		password: ''
	});

	useEffect(() => {
		if (loginResponse.data?.stat_code === StatCode.SUCCESS) {
			dispatch(setUserData(loginResponse.data.data));
			navigate('/dashboard');
		}
	}, [loginResponse]);

	const onClickLogin = () => {
		loginAdmin(loginForm);
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

import { login as loginAction } from 'stores/actions';
import { useAppAsyncDispatch } from 'hooks';
import {
	requiredRule,
	minLengthRule,
	maxLengthRule,
	createFieldConfig,
	emailRule
} from 'helpers';
import { LoginType } from 'interface';

export const loginField = {
	email: {
		...createFieldConfig({
			name: 'email',
			type: 'email'
		}),
		validationRules: [
			requiredRule('email'),
			minLengthRule('email', 10),
			maxLengthRule('email', 25),
			emailRule()
		]
	},
	password: {
		...createFieldConfig({
			name: 'password',
			type: 'password'
		}),
		validationRules: [
			requiredRule('password'),
			minLengthRule('password', 8),
			maxLengthRule('password', 20)
		]
	},
};

const useLoginPage = () => {
	const login = useAppAsyncDispatch<LoginType>(loginAction);
	const onClickLogin = ({ username, password }: any) => {
		login({
			payload: {
				username,
				password
			}
		});
	};

	return {
		onClickLogin,
		loginField
	};
};

export default useLoginPage;

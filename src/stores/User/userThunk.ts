import { endpoints } from 'constant';
import { LoginType, UserData } from 'interface';
import { thunkUtils } from 'utils';

// function that accepts a Redux action type string and a callback function that should return a promise

export const login = thunkUtils<UserData, LoginType>({
	type: 'auth/login',
	endpoint: endpoints.auth,
	method: 'POST',
});
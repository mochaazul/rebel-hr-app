export const clearToken = () => {
	return localStorage.removeItem('token');
};

export const getToken = () => {
	return localStorage.getItem('token');
};

export const setTokenUser = (token: string) => {
	return localStorage.setItem('token', token);
};

export const clearStorage = () => {
	return localStorage.clear();
};

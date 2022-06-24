import { ResponseStatus } from 'interface';

export interface UserState {
	user: UserData;
	loading: boolean;
	error: ResponseStatus;
}
export interface UserData {
	accessToken?: string;
	refreshToken?: string;
	name?: string;
	roles?: string[];
}

export type LoginType = {
	username: string;
	password: string;
};

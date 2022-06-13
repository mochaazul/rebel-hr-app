import { logger, localStorage } from "helpers";
import { ResponseType } from 'interface';

type RequestType = {
	payload?: any,
	endpoint?: any,
	loadingMessage?: boolean,
	onSuccess?: (dispatch?: any, data?: any) => void;
	onError?: (payload?: any) => void;
};

const request = ({
	payload,
	endpoint,
	loadingMessage,
	onSuccess,
	onError
}: RequestType) => {
	return async (dispatch: any) => {
		try {
			const url = process.env.REACT_APP_BASE_URL + endpoint.path;
			const makeRequest = await fetch(url, {
				method: endpoint.method,
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: localStorage.getToken() || ''
				},
				body: (endpoint.method !== 'GET' && JSON.stringify(payload)) || null
			});

			const response = await makeRequest.json();

			const data = {
				code: makeRequest.status,
				response: {
					results: {}
				}
			};

			if (makeRequest.status < 400) {
				data.response = response.results;
				onSuccess && onSuccess(dispatch, data);
			} else {
				if (makeRequest.status === 400) {
					// Do Something
				} else if (makeRequest.status === 401) {
					// Do Something
				} else if (makeRequest.status === 403) {
					// Do Something
				} else if (makeRequest.status === 404) {
					// Do Something
				} else if (makeRequest.status === 500) {
					// Do Something
				}

				onError && onError();
			}
		} catch (error) {
			logger(error);
		}
	};
};

type Option = {
	path?: string,
	payload?: any,
	method?: 'POST' | 'GET' | 'DELETE' | 'PATCH';
	baseUrl?: string;
};

export const network = async <T = unknown>(option?: Option): Promise<ResponseType<T>> => {
	try {
		const url = (option?.baseUrl ? option.baseUrl : process.env.REACT_APP_BASE_URL) + option?.path!;
		const response = await fetch(url, {
			method: option?.method,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'Authorization': `Bearer ${ localStorage.getToken() }`
			},

			body: (option?.method !== 'GET' && JSON.stringify(option?.payload)) || null
		});
		const data = await response.json();
		if (!response.ok) {
			if (response.status < 400) {
				return data;
			} else {
				if (response.status === 400) {
					// Do Something
				} else if (response.status === 401) {
					// Do Something
				} else if (response.status === 403) {
					// Do Something
				} else if (response.status === 404) {
					// Do Something
				} else if (response.status === 500) {
					// Do Something
				}

			}
		}


		return data;
	} catch (error) {

		throw new Error(error as any);
	}
};


export default request;

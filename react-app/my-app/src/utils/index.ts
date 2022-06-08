import { logger, localStorage } from "helpers";

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

export default request;

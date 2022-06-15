import { localStorage } from "helpers";
import { ResponseType } from 'interface';

type Option = {
    path?: string,
    payload?: any,
    method?: 'POST' | 'GET' | 'DELETE' | 'PATCH' | 'PUT';
    baseUrl?: string;
    token?: string;
};

export const request = async <T = unknown>(option?: Option): Promise<ResponseType<T>> => {
    try {
        const url = (option?.baseUrl ? option.baseUrl : process.env.REACT_APP_BASE_URL) + option?.path!;
        const token = option?.token || localStorage.getToken() ? `Bearer ${ option?.token ? option?.token : localStorage.getToken() }` : '';
        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            authorization: token
        };
        const response = await fetch(url, {
            method: option?.method,
            headers,
            body: (option?.method !== 'GET' && JSON.stringify(option?.payload)) || null
        });
        const data = await response.json();
        if (!response.ok) {
            if (response.status < 400) {
                // Do somethinh
            } else {
                if (response.status === 400) {
                    // Do something
                } else if (response.status === 401) {
                    // Do something
                } else if (response.status === 403) {
                    // Do Something
                } else if (response.status === 404) {
                    // Do Something
                } else if (response.status === 500) {
                    // Do Something
                } else {
                    throw new Error(data);
                }

            }
            return Promise.reject(data);
        }


        return data;
    } catch (error) {

        throw new Error(error as any);
    }
};


export default request;

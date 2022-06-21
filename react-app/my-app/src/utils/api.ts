import { localStorage } from "helpers";
import { ResponseType } from 'interface';

type Option = {
    endpoint?: string,
    payload?: any,
    method?: 'POST' | 'GET' | 'DELETE' | 'PATCH' | 'PUT';
    baseUrl?: string;
    token?: string;
    header?: HeadersInit
};


/**
 * Function to make api call to endpoint provided
 * @param {Option} [option] - This is the object that contains the request parameters.
 * @returns Promise<ResponseType<T>>
 */

export const apiCall = async <T = unknown>(option?: Option): Promise<ResponseType<T>> => {
    try {
        const url = (option?.baseUrl ? option.baseUrl : process.env.REACT_APP_BASE_URL) + option?.endpoint!;
        const token = option?.token || localStorage.getToken() ? `Bearer ${ option?.token ? option?.token : localStorage.getToken() }` : '';
        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            authorization: token,
            ...option?.header
        };
        const response = await fetch(url, {
            method: option?.method,
            headers,
            body: (option?.method !== 'GET' && JSON.stringify(option?.payload)) || null
        });
        const data = await response.json();
        if (!response.ok) {
            // Promise rejection will be handled on middleware
            // there is global error handler for redux thunk on middleware
            // use error handler logic there instead in here
            return Promise.reject(data);
        }
        return data;
    } catch (error) {
        throw new Error(error as any);
    }
};
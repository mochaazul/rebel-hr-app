import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'config';
import { UserResponse } from 'interface';

type LoginType = {
    username: string;
    password: string;
};

export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['User'],
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    endpoints: builder => ({
        loginAdmin: builder.mutation<UserResponse, Partial<LoginType>>({
            query(body) {
                return {
                    url: '/users/login',
                    method: 'POST',
                    body: body,
                };
            },
        }),
    })
});

export const { useLoginAdminMutation } = userApi;

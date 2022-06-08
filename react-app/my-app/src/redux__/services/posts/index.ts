// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Posts } from './types';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (build) => ({
        getPosts: build.query<Posts, string>({
            query: (string) => `pokemon/${ string }`,
        }),
        // updatePokemonByName: build.mutation<Posts, Pick<Posts, 'posts'> & Partial<Posts>>({
        //     query: ({ posts, ...patch }) => ({
        //         url: `pokemon/${ name }`,
        //         method: 'PATCH',
        //         body: patch,
        //     }),
        //     async onQueryStarted({ posts, ...patch }, { dispatch, queryFulfilled }) {
        //         try {
        //             const { data: updatePokemonByName } = await queryFulfilled;
        //             dispatch(
        //                 pokemonApi.util.updateQueryData('getPokemonByName', posts, (draft) => {
        //                     Object.assign(draft, updatePokemonByName);
        //                 })
        //             );
        //         } catch { }
        //     },
        // }),
    }),

});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery, useLazyGetPostsQuery
    // useUpdatePokemonByNameMutation,
} = pokemonApi;
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon } from './types';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (build) => ({
        getPokemonByName: build.query<Pokemon, string>({
            query: (string) => `pokemon/${ string }`,
        }),
        updatePokemonByName: build.mutation<Pokemon, Pick<Pokemon, 'name'> & Partial<Pokemon>>({
            query: ({ name, ...patch }) => ({
                url: `pokemon/${ name }`,
                method: 'PATCH',
                body: patch,
            }),
            async onQueryStarted({ name, ...patch }, { dispatch, queryFulfilled }) {
                try {
                    const { data: updatePokemonByName } = await queryFulfilled;
                    dispatch(
                        pokemonApi.util.updateQueryData('getPokemonByName', name, (draft) => {
                            Object.assign(draft, updatePokemonByName);
                        })
                    );
                } catch { }
            },
        }),
    }),

});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery,
    useLazyGetPokemonByNameQuery,
    useUpdatePokemonByNameMutation,
} = pokemonApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ArticleDetail, Articles, Pagination, PayloadArticle } from 'interface';
import { baseUrl } from 'config';
import { RootState } from 'stores';
import { generateQueryString } from 'helpers';

export const articlesApi = createApi({
    reducerPath: 'articlesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).user.accessToken;

            if (token) {
                headers.set('Authorization', `Bearer ${ token }`);
            }

            return headers;
        },
    }),
    tagTypes: ['Articles'],
    endpoints: (build) => ({
        getArticles: build.query<Articles, Pagination | undefined>({
            query: ({ limit, keyword, order, sort, search, page }: Pagination) =>
                `/articles?${ generateQueryString({ sort: 'ASC' }) }`,
            providesTags: (result, error, page) =>
                result
                    ? [
                        ...result.data.map(({ id }) => ({ type: 'Articles' as const, id })),
                        { type: 'Articles', id: 'LIST' },
                    ]
                    : [{ type: 'Articles', id: 'LIST' }],

        }),
        addArticle: build.mutation<ArticleDetail, Partial<PayloadArticle>>({
            query(body) {
                return {
                    url: `/articles`,
                    method: 'POST',
                    body: body,
                };
            },

            invalidatesTags: [{ type: 'Articles', id: 'LIST' }],

            // manual cache update
            // async onQueryStarted({ title, body, userId }, { dispatch, queryFulfilled, getCacheEntry, }) {
            //     const id = (await queryFulfilled).data.id;
            //     console.log((await queryFulfilled).meta?.request.url);
            //     const patchResult = dispatch(
            //         articlesApi.util.updateQueryData('getPosts', undefined, (draft) => {
            //             draft.push({ title: title, body: body, userId: userId || 1, id } as PostDetail);
            //         })
            //     );
            //     try {
            //         await queryFulfilled;
            //     } catch {
            //         patchResult.undo();
            //     }
            // },
        }),
        updateArticle: build.mutation<ArticleDetail, Partial<PayloadArticle>>({
            query(body) {
                return {
                    url: `/articles/${ body.id }`,
                    method: 'PUT',
                    body: body,
                };
            },

            invalidatesTags: [{ type: 'Articles', id: 'LIST' }],
        }),
        deleteArticle: build.mutation<ArticleDetail, Partial<PayloadArticle>>({
            query(body) {
                return {
                    url: `/articles/${ body.id }`,
                    method: 'DELETE',
                    body: body,
                };
            },

            invalidatesTags: [{ type: 'Articles', id: 'LIST' }],
        }),
    }),

});

export const {
    useLazyGetArticlesQuery,
    useGetArticlesQuery,
    useAddArticleMutation,
    useUpdateArticleMutation,
    useDeleteArticleMutation
} = articlesApi;
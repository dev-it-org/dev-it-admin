import { createApi } from '@reduxjs/toolkit/query/react'

import { T_PostMutationRequest, T_PostsRequest } from './models'

import { baseQuery } from '../utils'

import { I_GetData } from 'models/app'
import { T_Post } from 'models/posts'
import { toQueryParam } from 'utils/helpers/toQueryParams'

export const postsAPI = createApi({
  reducerPath: 'postsAPI',
  baseQuery,
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    getPosts: build.query<
      I_GetData<{ posts: T_Post[]; count: number; total: number; page: number; limit: number }>,
      T_PostsRequest
    >({
      query: (params) => ({
        url: `/posts${toQueryParam(params)}`,
      }),
      providesTags: ['Posts'],
    }),
    getPost: build.query<I_GetData<{ post: T_Post }>, string>({
      query: (postId) => ({
        url: `/posts/${postId}`,
      }),
      providesTags: ['Posts'],
    }),
    updatePost: build.mutation<
      I_GetData<Omit<T_Post, 'created_at' | 'updated_at'>>,
      { postId: string; body: T_PostMutationRequest }
    >({
      query: ({ postId, body }) => ({
        url: `/posts/${postId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
    createPost: build.mutation<
      I_GetData<Omit<T_Post, 'created_at' | 'updated_at'>>,
      T_PostMutationRequest
    >({
      query: (body) => ({
        url: `/posts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
    deletePost: build.mutation<void, string>({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
})

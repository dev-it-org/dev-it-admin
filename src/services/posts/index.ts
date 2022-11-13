import { createApi } from '@reduxjs/toolkit/query/react'

import { T_PostsRequest } from './models'

import { baseQuery } from '../utils'

import { I_GetData } from 'models/app'
import { T_Post } from 'models/posts'
import { toQueryParam } from 'utils/helpers/toQueryParams'

export const postsAPI = createApi({
  reducerPath: 'postsAPI',
  baseQuery,
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    getPosts: build.query<I_GetData<{ posts: T_Post[] }>, T_PostsRequest>({
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
  }),
})

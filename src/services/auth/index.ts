import { createApi } from '@reduxjs/toolkit/query/react'

import {
  I_RefreshResponse,
  I_SignInRequest,
  I_SignInResponse,
  I_SignUpRequest,
  T_RefreshRequest,
} from './models'

import { baseQuery } from '../utils'

import { I_GetData } from 'models/app'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery,
  tagTypes: ['Auth'],
  endpoints: (build) => ({
    signIn: build.mutation<I_GetData<I_SignInResponse>, I_SignInRequest>({
      query: (body) => ({
        url: `/auth/sign-in`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
    signUp: build.mutation<I_GetData<I_SignInResponse>, I_SignUpRequest>({
      query: (body) => ({
        url: `/auth/sign-up`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
    refresh: build.mutation<I_GetData<I_RefreshResponse>, T_RefreshRequest>({
      query: (body) => ({
        url: `/auth/refresh`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
})

import { createApi } from '@reduxjs/toolkit/query/react'

import { T_UserCreateRequest, T_UserUpdateRequest } from './models'

import { baseQuery } from '../utils'

import { I_GetData } from 'models/app'
import { T_User } from 'models/users'

export const usersAPI = createApi({
  reducerPath: 'usersAPI',
  baseQuery,
  tagTypes: ['Users'],
  endpoints: (build) => ({
    getUsers: build.query<I_GetData<{ users: T_User[] }>, void>({
      query: () => ({
        url: `/users`,
      }),
      providesTags: ['Users'],
    }),
    getUser: build.query<I_GetData<{ user: T_User }>, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
      }),
      providesTags: ['Users'],
    }),
    updateUser: build.mutation<
      I_GetData<Omit<T_User, 'created_at' | 'updated_at'>>,
      { userId: string; body: T_UserUpdateRequest }
    >({
      query: ({ userId, body }) => ({
        url: `/users/${userId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
    createUser: build.mutation<
      I_GetData<Omit<T_User, 'created_at' | 'updated_at'>>,
      T_UserCreateRequest
    >({
      query: (body) => ({
        url: `/users`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: build.mutation<void, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
})

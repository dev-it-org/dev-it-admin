import { createApi } from '@reduxjs/toolkit/query/react'

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
  }),
})

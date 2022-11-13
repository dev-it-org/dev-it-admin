import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQuery } from '../utils'

import { I_GetData } from 'models/app'
import { T_User } from 'models/users'

export const infoAPI = createApi({
  reducerPath: 'infoAPI',
  baseQuery,
  tagTypes: ['Info'],
  endpoints: (build) => ({
    getMyInfo: build.query<I_GetData<Omit<T_User, 'created_at' | 'updated_at'>>, void>({
      query: () => ({
        url: `/info/me`,
      }),
      providesTags: ['Info'],
    }),
  }),
})

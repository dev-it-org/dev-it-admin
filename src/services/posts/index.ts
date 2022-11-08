import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQuery } from '../utils'

export const postsAPI = createApi({
  reducerPath: 'postsAPI',
  baseQuery,
  tagTypes: ['Posts'],
  endpoints: (build) => ({}),
})

import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

import { LocalStorage } from 'utils/helpers/localStorage'

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:4000/api',
  prepareHeaders: (headers) => {
    const accessToken = LocalStorage.getAuthToken()
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }
    return headers
  },
})

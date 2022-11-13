import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { uiSlice } from './ui'

import { authAPI, postsAPI } from 'services'

const rootReducer = combineReducers({
  [uiSlice.name]: uiSlice.reducer,
  [postsAPI.reducerPath]: postsAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([postsAPI.middleware, authAPI.middleware]),
})

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch

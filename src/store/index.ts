import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { uiSlice } from './ui'

import { postsAPI } from 'services'

const rootReducer = combineReducers({
  [uiSlice.name]: uiSlice.reducer,
  [postsAPI.reducerPath]: postsAPI.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([postsAPI.middleware]),
})

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch

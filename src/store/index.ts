import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { uiSlice } from './ui'

const rootReducer = combineReducers({
  [uiSlice.name]: uiSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch

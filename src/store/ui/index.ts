import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { instanceMe } from './data'
import { I_UIState } from './models'

import { T_ModalBody } from 'models/modal'
import { T_User } from 'models/users'

const initialState: I_UIState = {
  me: instanceMe,
  isAuth: false,
  modal: {
    isOpen: false,
    window: null,
    data: null,
  },
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<Omit<T_User, 'created_at' | 'updated_at'> & { isAuth: boolean }>,
    ) => {
      const { isAuth, ...spread } = action.payload
      state.isAuth = isAuth
      state.me = spread
    },
    removeAuth: (state) => {
      state.isAuth = false
      state.me = instanceMe
    },
    openModal: (state, action: PayloadAction<T_ModalBody>) => {
      state.modal.isOpen = true
      state.modal.window = action.payload.window
      state.modal.data = action.payload.data
    },
    closeModal: (state) => {
      state.modal.isOpen = false
      state.modal.window = null
      state.modal.data = null
    },
  },
})

export const { openModal, closeModal, setAuth, removeAuth } = uiSlice.actions

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { I_UIState } from './models'

import { T_ModalBody } from 'models/modal'

const initialState: I_UIState = {
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
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
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

export const { openModal, closeModal, setAuth } = uiSlice.actions

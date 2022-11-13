export type T_ModalBody = {
  window: E_Window | null
  data?: any | null
}

export interface I_Modal extends T_ModalBody {
  isOpen: boolean
}

export enum E_Window {
  postEdit = 'postEdit',
  postCreate = 'postCreate',
  userEdit = 'userEdit',
  userCreate = 'userCreate',
}

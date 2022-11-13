import { I_Modal } from 'models/modal'
import { T_User } from 'models/users'

export interface I_UIState {
  me: Omit<T_User, 'created_at' | 'updated_at'>
  isAuth: boolean
  modal: I_Modal
}

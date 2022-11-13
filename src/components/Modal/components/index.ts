import { PostEdit } from './PostEdit'
import { UserEdit } from './UserEdit'

import { E_Window } from 'models/modal'

export const Modals = {
  [E_Window.userEdit]: UserEdit,
  [E_Window.postEdit]: PostEdit,
}

import { PostCreate } from './PostCreate'
import { PostEdit } from './PostEdit'
import { UserCreate } from './UserCreate'
import { UserEdit } from './UserEdit'

import { E_Window } from 'models/modal'

export const Modals = {
  [E_Window.userEdit]: UserEdit,
  [E_Window.userCreate]: UserCreate,
  [E_Window.postEdit]: PostEdit,
  [E_Window.postCreate]: PostCreate,
}

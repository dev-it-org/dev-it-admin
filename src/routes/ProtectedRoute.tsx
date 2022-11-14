import { Outlet } from 'react-router-dom'

import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_UserRole } from 'models/users'
import { NotFound } from 'pages'
import { LocalStorage } from 'utils/helpers/localStorage'

export const ProtectedRoute = () => {
  const { isAuth, myInfo } = useStoreSelector((state) => ({
    isAuth: state.ui.isAuth,
    myInfo: state.ui.me,
  }))

  const token = LocalStorage.getAuthToken()

  if ((!isAuth && !token) || myInfo.role === E_UserRole.User) {
    return <NotFound />
  }

  return <Outlet />
}

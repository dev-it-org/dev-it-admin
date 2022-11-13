import { Outlet } from 'react-router-dom'

import { useStoreSelector } from 'hooks/useStoreSelector'
import { NotFound } from 'pages'
import { LocalStorage } from 'utils/helpers/localStorage'

export const ProtectedRoute = () => {
  const isAuth = useStoreSelector((state) => state.ui.isAuth)

  const token = LocalStorage.getAuthToken()

  if (!isAuth && !token) {
    return <NotFound />
  }

  return <Outlet />
}

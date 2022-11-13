import { useLayoutEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { MainLayout } from 'layouts/Main'
import { E_Routes } from 'models/routes'
import { setAuth } from 'store/ui'
import { LocalStorage } from 'utils/helpers/localStorage'

export const ProtectedRoute = () => {
  const dispatch = useStoreDispatch()
  const isAuth = useStoreSelector((state) => state.ui.isAuth)

  const token = LocalStorage.getAuthToken()

  useLayoutEffect(() => {
    if (token && !isAuth) dispatch(setAuth(true))
  }, [])

  if (!isAuth && !token) {
    return <Navigate to={E_Routes.auth} />
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

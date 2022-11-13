import { useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { AuthLayout } from 'layouts/Auth'
import { MainLayout } from 'layouts/Main'
import { NotFound } from 'pages'
import { setAuth } from 'store/ui'
import { LocalStorage } from 'utils/helpers/localStorage'

export const AuthRoute = () => {
  const dispatch = useStoreDispatch()
  const isAuth = useStoreSelector((state) => state.ui.isAuth)

  const token = LocalStorage.getAuthToken()

  useLayoutEffect(() => {
    if (token) dispatch(setAuth(true))
  }, [])

  if (token && isAuth)
    return (
      <MainLayout>
        <NotFound />
      </MainLayout>
    )

  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  )
}
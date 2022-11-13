import { useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { MainLayout } from 'layouts/Main'
import { setAuth } from 'store/ui'
import { LocalStorage } from 'utils/helpers/localStorage'

export const MainRoute = () => {
  const dispatch = useStoreDispatch()

  const token = LocalStorage.getAuthToken()

  useLayoutEffect(() => {
    if (token) dispatch(setAuth(true))
  }, [])

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

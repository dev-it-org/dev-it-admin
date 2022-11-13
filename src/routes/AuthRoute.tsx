import { useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { Loader } from 'components'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { AuthLayout } from 'layouts/Auth'
import { MainLayout } from 'layouts/Main'
import { NotFound } from 'pages'
import { infoAPI } from 'services'
import { setAuth } from 'store/ui'
import { LocalStorage } from 'utils/helpers/localStorage'

export const AuthRoute = () => {
  const dispatch = useStoreDispatch()
  const isAuth = useStoreSelector((state) => state.ui.isAuth)

  const [getMyInfo, { data: myInfoData, isLoading }] = infoAPI.useLazyGetMyInfoQuery()

  const token = LocalStorage.getAuthToken()

  useLayoutEffect(() => {
    if (token) getMyInfo()
  }, [token])

  useLayoutEffect(() => {
    if (token && myInfoData)
      dispatch(
        setAuth({
          isAuth: true,
          ...myInfoData.data,
        }),
      )
  }, [myInfoData])

  if (isLoading) return <Loader />

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

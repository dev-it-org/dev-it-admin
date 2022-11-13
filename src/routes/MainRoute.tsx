import { useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { Loader } from 'components'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { MainLayout } from 'layouts/Main'
import { infoAPI } from 'services'
import { setAuth } from 'store/ui'
import { LocalStorage } from 'utils/helpers/localStorage'

export const MainRoute = () => {
  const dispatch = useStoreDispatch()

  const { data: myInfoData, isLoading } = infoAPI.useGetMyInfoQuery()

  const token = LocalStorage.getAuthToken()

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

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

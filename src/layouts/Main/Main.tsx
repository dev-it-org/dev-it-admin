import { useLocation, useNavigate } from 'react-router-dom'

import { T_MainLayoutProps } from './models'
import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_Routes } from 'models/routes'
import { setAuth } from 'store/ui'
import { LocalStorage } from 'utils/helpers/localStorage'

export const MainLayout = ({ children }: T_MainLayoutProps) => {
  const dispatch = useStoreDispatch()
  const isAuth = useStoreSelector((state) => state.ui.isAuth)

  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    LocalStorage.deleteAuthToken()
    dispatch(setAuth(false))
    if (location.pathname === E_Routes.home) navigate(E_Routes.auth)
  }

  return (
    <S.Inner>
      <S.Header>{isAuth && <button onClick={handleLogout}>Logout</button>}</S.Header>
      <S.Content>{children}</S.Content>
    </S.Inner>
  )
}

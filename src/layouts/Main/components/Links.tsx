import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_Routes } from 'models/routes'
import { E_UserRole } from 'models/users'
import { removeAuth } from 'store/ui'
import { LocalStorage } from 'utils/helpers/localStorage'

export const Links = () => {
  const dispatch = useStoreDispatch()
  const { isAuth, myInfo } = useStoreSelector((state) => ({
    isAuth: state.ui.isAuth,
    myInfo: state.ui.me,
  }))

  const navigate = useNavigate()

  const handleLogout = () => {
    LocalStorage.deleteAuthToken()
    dispatch(removeAuth())
    if (location.pathname === E_Routes.dashboard) navigate(E_Routes.auth)
  }

  return (
    <S.Links>
      <S.ButtonLink onClick={() => navigate(E_Routes.posts)}>Posts</S.ButtonLink>
      {isAuth && myInfo.role !== E_UserRole.User ? (
        <S.ButtonLink onClick={() => navigate(E_Routes.dashboard)}>Dashboard</S.ButtonLink>
      ) : isAuth ? null : (
        <S.ButtonLink onClick={() => navigate(E_Routes.auth)}>Sign in</S.ButtonLink>
      )}
      {isAuth && <S.ButtonLink onClick={handleLogout}>Logout</S.ButtonLink>}
    </S.Links>
  )
}

import * as S from './styles'

import { useStoreSelector } from 'hooks/useStoreSelector'

export const MyInfo = () => {
  const { isAuth, myInfo } = useStoreSelector((state) => ({
    isAuth: state.ui.isAuth,
    myInfo: state.ui.me,
  }))

  if (isAuth)
    return (
      <S.MyInfo>
        <S.MyInfoEmail>{myInfo.email}</S.MyInfoEmail>
        <S.MyInfoRole>{myInfo.role}</S.MyInfoRole>
      </S.MyInfo>
    )

  return null
}

import { Links, MyInfo } from './components'
import { T_MainLayoutProps } from './models'
import * as S from './styles'

export const MainLayout = ({ children }: T_MainLayoutProps) => {
  return (
    <S.Inner>
      <S.Header>
        <Links />
        <MyInfo />
      </S.Header>
      <S.Content>{children}</S.Content>
    </S.Inner>
  )
}

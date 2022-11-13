import { T_AuthLayoutProps } from './models'
import * as S from './styles'

export const AuthLayout = ({ children }: T_AuthLayoutProps) => {
  return <S.Inner>{children}</S.Inner>
}

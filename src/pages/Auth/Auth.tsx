import { useState } from 'react'

import { SignIn, SignUp } from './extensions'
import { E_AuthMode } from './models'
import * as S from './styles'

export const Auth = () => {
  const [authMode, setAuthMode] = useState<E_AuthMode>(E_AuthMode.signIn)

  const handleToggleAuthMode = (mode: E_AuthMode) => {
    setAuthMode(mode)
  }

  const renderContent = () => {
    switch (authMode) {
      case E_AuthMode.signIn:
        return <SignIn handleToggleAuthMode={handleToggleAuthMode} />
      case E_AuthMode.signUp:
        return <SignUp handleToggleAuthMode={handleToggleAuthMode} />
    }
  }

  return <S.Inner>{renderContent()}</S.Inner>
}

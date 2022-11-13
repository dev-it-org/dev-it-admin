import { useState } from 'react'

import { SignIn, SignUp } from './extensions'
import { E_Mode } from './models'

export const Auth = () => {
  const [authMode, setAuthMode] = useState<E_Mode>(E_Mode.signIn)

  const handleToggleAuthMode = (mode: E_Mode) => {
    setAuthMode(mode)
  }

  const renderContent = () => {
    switch (authMode) {
      case E_Mode.signIn:
        return <SignIn handleToggleAuthMode={handleToggleAuthMode} />
      case E_Mode.signUp:
        return <SignUp handleToggleAuthMode={handleToggleAuthMode} />
    }
  }

  return (
    <div>
      Auth
      {renderContent()}
    </div>
  )
}

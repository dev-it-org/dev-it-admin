import { E_AuthMode } from 'pages/Auth/models'

export type T_SignInProps = {
  handleToggleAuthMode: (mode: E_AuthMode) => void
}

export type T_SignInFormData = {
  email: string
  password: string
}

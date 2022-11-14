import { E_AuthMode } from 'pages/Auth/models'

export type T_SignUpProps = {
  handleToggleAuthMode: (mode: E_AuthMode) => void
}

export type T_SignUpFormData = {
  email: string
  username: string
  password: string
  confirmPassword: string
}

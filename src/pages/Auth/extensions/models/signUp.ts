import { E_Mode } from 'pages/Auth/models'

export type T_SignUpProps = {
  handleToggleAuthMode: (mode: E_Mode) => void
}

export type T_SignUpFormData = {
  email: string
  username: string
  password: string
  confirmPassword: string
}

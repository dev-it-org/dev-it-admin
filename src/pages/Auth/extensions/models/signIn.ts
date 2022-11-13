import { E_Mode } from 'pages/Auth/models'

export type T_SignInProps = {
  handleToggleAuthMode: (mode: E_Mode) => void
}

export type T_SignInFormData = {
  email: string
  password: string
}

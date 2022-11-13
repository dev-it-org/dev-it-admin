import { E_UserRole } from 'models/users'

export interface I_SignInResponse {
  accessToken: string
  refreshToken: string
  id: number
  email: string
  username: string
  role: E_UserRole
}

export interface I_SignInRequest {
  email: string
  password: string
}

export interface I_SignUpRequest {
  email: string
  username?: string
  password: string
}

export type I_RefreshResponse = {
  accessToken: string
  refreshToken: string
}

export type T_RefreshRequest = {
  refreshToken: string
}

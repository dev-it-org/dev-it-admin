export type T_User = {
  id: number
  email: string
  username: string
  role: E_UserRole
  created_at: string
  updated_at: string
}

export enum E_UserRole {
  User = 'User',
  Admin = 'Admin',
  Moderator = 'Moderator',
}

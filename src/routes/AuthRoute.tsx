import { Outlet } from 'react-router-dom'

import { AuthLayout } from 'layouts/Auth'

export const AuthRoute = () => {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  )
}

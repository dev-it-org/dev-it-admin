import { Routes, Route, Navigate } from 'react-router-dom'

import { AuthRoute } from './AuthRoute'
import { MainRoute } from './MainRoute'
import { ProtectedRoute } from './ProtectedRoute'

import { useScrollToTop } from 'hooks/useScrollToTop'
import { E_Routes } from 'models/routes'
import { Auth, Dashboard, NotFound, Post, Posts } from 'pages'

export const AppRoutes = () => {
  useScrollToTop()
  return (
    <Routes>
      <Route element={<MainRoute />}>
        <Route path={E_Routes.start} element={<Navigate to={E_Routes.posts} />} />
        <Route path={E_Routes.posts} element={<Posts />} />
        <Route path={E_Routes.post} element={<Post />} />
        <Route path={E_Routes.every} element={<NotFound />} />
        <Route element={<ProtectedRoute />}>
          <Route path={E_Routes.dashboard} element={<Dashboard />} />
        </Route>
      </Route>
      <Route element={<AuthRoute />}>
        <Route path={E_Routes.auth} element={<Auth />} />
      </Route>
    </Routes>
  )
}

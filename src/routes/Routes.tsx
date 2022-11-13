import { Routes, Route, Navigate } from 'react-router-dom'

import { AuthRoute } from './AuthRoute'
import { MainRoute } from './MainRoute'
import { ProtectedRoute } from './ProtectedRoute'

import { E_Routes } from 'models/routes'
import { Auth, Home, NotFound, Post, Posts } from 'pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainRoute />}>
        <Route path={E_Routes.start} element={<Navigate to={E_Routes.posts} />} />
        <Route path={E_Routes.posts} element={<Posts />} />
        <Route path={E_Routes.post} element={<Post />} />
        <Route path={E_Routes.every} element={<NotFound />} />
        <Route element={<ProtectedRoute />}>
          <Route path={E_Routes.home} element={<Home />} />
        </Route>
      </Route>
      <Route element={<AuthRoute />}>
        <Route path={E_Routes.auth} element={<Auth />} />
      </Route>
    </Routes>
  )
}

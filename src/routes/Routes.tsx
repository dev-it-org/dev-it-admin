import { Routes, Route, Navigate } from 'react-router-dom'

import { E_Routes } from 'models/routes'
import { Home, Post, Posts } from 'pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={E_Routes.start} element={<Navigate to={E_Routes.home} />} />
      <Route path={E_Routes.home} element={<Home />} />
      <Route path={E_Routes.posts} element={<Posts />} />
      <Route path={E_Routes.post} element={<Post />} />
    </Routes>
  )
}

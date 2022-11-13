import { useNavigate } from 'react-router-dom'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_Routes } from 'models/routes'
import { removeAuth } from 'store/ui'
import { LocalStorage } from 'utils/helpers/localStorage'

export const Links = () => {
  const dispatch = useStoreDispatch()
  const isAuth = useStoreSelector((state) => state.ui.isAuth)

  const navigate = useNavigate()

  const handleLogout = () => {
    LocalStorage.deleteAuthToken()
    dispatch(removeAuth())
    if (location.pathname === E_Routes.dashboard) navigate(E_Routes.auth)
  }

  return (
    <>
      {isAuth && <button onClick={handleLogout}>Logout</button>}
      <div>
        <button onClick={() => navigate(E_Routes.posts)}>Posts</button>
        {isAuth ? (
          <button onClick={() => navigate(E_Routes.dashboard)}>Dashboard</button>
        ) : (
          <button onClick={() => navigate(E_Routes.auth)}>Sign in</button>
        )}
      </div>
    </>
  )
}

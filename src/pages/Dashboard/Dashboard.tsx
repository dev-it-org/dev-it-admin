import { useState } from 'react'

import { PostsTable, UsersTable } from './extensions'
import { E_DashboardMode } from './models'
import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { E_Window } from 'models/modal'
import { openModal } from 'store/ui'

export const Dashboard = () => {
  const [dashboardMode, setDashboardMode] = useState<E_DashboardMode>(E_DashboardMode.users)

  const dispatch = useStoreDispatch()

  const handleSetDashboardMode = (mode: E_DashboardMode) => {
    setDashboardMode(mode)
  }

  const handleOpenModal = (window: E_Window, data: any) => {
    dispatch(openModal({ window, data }))
  }

  const renderContent = () => {
    switch (dashboardMode) {
      case E_DashboardMode.users:
        return <UsersTable handleOpenModal={handleOpenModal} />
      case E_DashboardMode.posts:
        return <PostsTable handleOpenModal={handleOpenModal} />
    }
  }

  return (
    <S.Dashboard>
      Dashboard
      <div>
        <button onClick={() => handleSetDashboardMode(E_DashboardMode.users)}>Users</button>
        <button onClick={() => handleSetDashboardMode(E_DashboardMode.posts)}>Posts</button>
      </div>
      {renderContent()}
    </S.Dashboard>
  )
}

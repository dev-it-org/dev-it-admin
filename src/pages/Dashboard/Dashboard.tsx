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
      <S.ButtonGroup>
        <S.Button
          $mode={dashboardMode === E_DashboardMode.users}
          onClick={() => handleSetDashboardMode(E_DashboardMode.users)}
        >
          Users
        </S.Button>
        <S.Button
          $mode={dashboardMode === E_DashboardMode.posts}
          onClick={() => handleSetDashboardMode(E_DashboardMode.posts)}
        >
          Posts
        </S.Button>
      </S.ButtonGroup>
      {renderContent()}
    </S.Dashboard>
  )
}

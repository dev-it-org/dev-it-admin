/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useEffect, useLayoutEffect, useState } from 'react'

import { T_UsersTableProps } from './models'
import * as S from './styles'

import { Error, Loader } from 'components'
import { E_Window } from 'models/modal'
import { T_User } from 'models/users'
import { usersAPI } from 'services'

export const UsersTable = ({ handleOpenModal }: T_UsersTableProps) => {
  const [users, setUsers] = useState<T_User[]>([])

  const { data: usersData, isLoading } = usersAPI.useGetUsersQuery()
  const [deleteUser, { isLoading: isUserDeleting, isError, error }] =
    usersAPI.useDeleteUserMutation()

  useLayoutEffect(() => {
    if (usersData) setUsers(usersData.data.users)
  }, [usersData])

  const handleCreateUser = () => {
    handleOpenModal(E_Window.userCreate, null)
  }

  const handleToggle = (data: T_User) => {
    handleOpenModal(E_Window.userEdit, data)
  }

  const handleDeleteUser = (userId: number) => {
    deleteUser(String(userId))
  }

  useEffect(() => {
    if (isError) {
      const message = error as any
      alert(message.data.message)
    }
  }, [isError])

  if (isLoading) return <Loader />

  if (users)
    return (
      <S.Inner>
        <S.CreateButton onClick={handleCreateUser}>Create user</S.CreateButton>
        <S.UsersWrapper>
          {users.map((user) => {
            return (
              <S.User key={user.id} onDoubleClick={() => handleToggle(user)}>
                <S.Typography>{user.id}</S.Typography>
                <S.Typography>{user.email}</S.Typography>
                <S.Typography>{user.username}</S.Typography>
                <S.Typography>{user.role}</S.Typography>
                <S.ButtonGroup>
                  <S.EditButton onClick={() => handleToggle(user)}>Edit</S.EditButton>
                  <S.DeleteButton
                    disabled={isUserDeleting}
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </S.DeleteButton>
                </S.ButtonGroup>
              </S.User>
            )
          })}
        </S.UsersWrapper>
      </S.Inner>
    )

  return <Error />
}

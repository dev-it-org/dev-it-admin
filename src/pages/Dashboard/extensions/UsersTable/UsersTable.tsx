import { useLayoutEffect, useState } from 'react'

import { T_UsersTableProps } from './models'

import { Error, Loader } from 'components'
import { E_Window } from 'models/modal'
import { T_User } from 'models/users'
import { usersAPI } from 'services'

export const UsersTable = ({ handleOpenModal }: T_UsersTableProps) => {
  const [users, setUsers] = useState<T_User[]>([])

  const { data: usersData, isLoading } = usersAPI.useGetUsersQuery()

  useLayoutEffect(() => {
    if (usersData) setUsers(usersData.data.users)
  }, [usersData])

  const handleCreateUser = () => {
    handleOpenModal(E_Window.userCreate, null)
  }

  const handleDoubleClick = (data: T_User) => {
    handleOpenModal(E_Window.userEdit, data)
  }

  if (isLoading) return <Loader />

  if (users)
    return (
      <div>
        Users Table
        <button onClick={handleCreateUser}>Create user</button>
        <div>
          {users.map((user) => {
            return (
              <div key={user.id} onDoubleClick={() => handleDoubleClick(user)}>
                <div>{user.id}</div>
                <div>{user.email}</div>
                <div>{user.username}</div>
                <div>{user.role}</div>
              </div>
            )
          })}
        </div>
      </div>
    )

  return <Error />
}

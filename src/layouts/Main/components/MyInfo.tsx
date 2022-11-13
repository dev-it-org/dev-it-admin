import { useStoreSelector } from 'hooks/useStoreSelector'

export const MyInfo = () => {
  const myInfo = useStoreSelector((state) => state.ui.me)

  return (
    <div>
      <div>email: {myInfo.email}</div>
      <div>username: {myInfo.username}</div>
      <div>role: {myInfo.role}</div>
    </div>
  )
}

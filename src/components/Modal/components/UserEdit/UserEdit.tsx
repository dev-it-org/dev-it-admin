import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { T_UserEditFormData } from './models'
import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { usersAPI } from 'services'
import { closeModal } from 'store/ui'

export const UserEdit = () => {
  const dispatch = useStoreDispatch()
  const modal = useStoreSelector((state) => state.ui.modal)

  const [userUpdate, { isLoading, isSuccess }] = usersAPI.useUpdateUserMutation()

  const { register, handleSubmit } = useForm<T_UserEditFormData>({
    defaultValues: {
      ...modal.data,
    },
  })

  const handleSend = (data: T_UserEditFormData) => {
    userUpdate({
      userId: data.id,
      body: {
        email: data.email,
        username: data.username,
        role: data.role,
      },
    })
  }

  useEffect(() => {
    if (isSuccess) dispatch(closeModal())
  }, [isSuccess])

  return (
    <S.Inner>
      <S.Form onSubmit={handleSubmit(handleSend)}>
        <S.TextField placeholder='Email' {...register('email')} />
        <S.TextField placeholder='Username' {...register('username')} />
        <S.TextField placeholder='Role' {...register('role')} />
        <S.UpdateButton disabled={isLoading} type='submit'>
          Update
        </S.UpdateButton>
      </S.Form>
    </S.Inner>
  )
}

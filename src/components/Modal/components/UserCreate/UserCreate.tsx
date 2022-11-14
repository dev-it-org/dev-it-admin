import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { T_UserCreateFormData } from './models'
import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { usersAPI } from 'services'
import { closeModal } from 'store/ui'

export const UserCreate = () => {
  const dispatch = useStoreDispatch()

  const [userCreate, { isLoading, isSuccess }] = usersAPI.useCreateUserMutation()

  const { register, handleSubmit } = useForm<T_UserCreateFormData>({
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
  })

  const handleSend = (data: T_UserCreateFormData) => {
    userCreate(data)
  }

  useEffect(() => {
    if (isSuccess) dispatch(closeModal())
  }, [isSuccess])

  return (
    <S.Inner>
      <S.Form onSubmit={handleSubmit(handleSend)}>
        <S.TextField placeholder='Email*' {...register('email', { required: true })} />
        <S.TextField placeholder='Username' {...register('username')} />
        <S.TextField placeholder='Password*' {...register('password', { required: true })} />
        <S.CreateButton disabled={isLoading} type='submit'>
          Create user
        </S.CreateButton>
      </S.Form>
    </S.Inner>
  )
}

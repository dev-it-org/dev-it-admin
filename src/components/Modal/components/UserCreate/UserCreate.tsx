import { useForm } from 'react-hook-form'

import { T_UserCreateFormData } from './models'
import * as S from './styles'

export const UserCreate = () => {
  const { register, handleSubmit } = useForm<T_UserCreateFormData>({
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
  })

  const handleSend = (data: T_UserCreateFormData) => {
    console.log(data)
  }

  return (
    <div>
      <S.Form onSubmit={handleSubmit(handleSend)}>
        Post Edit
        <div>
          <S.TextField {...register('email')} />
          <S.TextField {...register('username')} />
          <S.TextField {...register('password')} />
        </div>
        <button type='submit'>Create user</button>
      </S.Form>
    </div>
  )
}

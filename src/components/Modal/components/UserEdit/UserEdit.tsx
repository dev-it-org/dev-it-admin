import { useForm } from 'react-hook-form'

import { T_UserEditFormData } from './models'
import * as S from './styles'

import { useStoreSelector } from 'hooks/useStoreSelector'

export const UserEdit = () => {
  const modal = useStoreSelector((state) => state.ui.modal)

  const { register, handleSubmit } = useForm<T_UserEditFormData>({
    defaultValues: {
      ...modal.data,
    },
  })

  const handleSend = (data: T_UserEditFormData) => {
    console.log(data)
  }

  return (
    <div>
      <S.Form onSubmit={handleSubmit(handleSend)}>
        Post Edit
        <div>
          <S.TextField {...register('email')} />
          <S.TextField {...register('username')} />
          <S.TextField {...register('role')} />
        </div>
        <button type='submit'>Update</button>
      </S.Form>
    </div>
  )
}

import { useForm } from 'react-hook-form'

import { T_PostEditFormData } from './models'
import * as S from './styles'

import { useStoreSelector } from 'hooks/useStoreSelector'

export const PostEdit = () => {
  const modal = useStoreSelector((state) => state.ui.modal)

  const { register, handleSubmit } = useForm<T_PostEditFormData>({
    defaultValues: {
      ...modal.data,
    },
  })

  const handleSend = (data: T_PostEditFormData) => {
    console.log(data)
  }

  return (
    <div>
      <S.Form onSubmit={handleSubmit(handleSend)}>
        Post Edit
        <div>
          <S.TextField {...register('title')} />
          <S.TextField {...register('description')} />
          <S.TextField {...register('link')} />
        </div>
        <button type='submit'>Update</button>
      </S.Form>
    </div>
  )
}

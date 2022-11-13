import { useForm } from 'react-hook-form'

import { T_PostCreateFormData } from './models'
import * as S from './styles'

export const PostCreate = () => {
  const { register, handleSubmit } = useForm<T_PostCreateFormData>({
    defaultValues: {
      title: '',
      description: '',
      link: '',
    },
  })

  const handleSend = (data: T_PostCreateFormData) => {
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
        <button type='submit'>Create post</button>
      </S.Form>
    </div>
  )
}

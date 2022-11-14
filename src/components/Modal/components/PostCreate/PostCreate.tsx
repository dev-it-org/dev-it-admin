import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { T_PostCreateFormData } from './models'
import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { postsAPI } from 'services'
import { closeModal } from 'store/ui'

export const PostCreate = () => {
  const dispatch = useStoreDispatch()

  const [createPost, { isLoading, isSuccess }] = postsAPI.useCreatePostMutation()

  const { register, handleSubmit } = useForm<T_PostCreateFormData>({
    defaultValues: {
      title: '',
      description: '',
      link: '',
    },
  })

  const handleSend = (data: T_PostCreateFormData) => {
    createPost(data)
  }

  useEffect(() => {
    if (isSuccess) dispatch(closeModal())
  }, [isSuccess])

  return (
    <S.Inner>
      <S.Form onSubmit={handleSubmit(handleSend)}>
        <S.TextField placeholder='Title*' {...register('title', { required: true })} />
        <S.TextField placeholder='Description' {...register('description')} />
        <S.TextField placeholder='Link' {...register('link')} />
        <S.UpdateButton disabled={isLoading} type='submit'>
          Create post
        </S.UpdateButton>
      </S.Form>
    </S.Inner>
  )
}

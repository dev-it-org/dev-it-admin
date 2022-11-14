import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { T_PostEditFormData } from './models'
import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { postsAPI } from 'services'
import { closeModal } from 'store/ui'

export const PostEdit = () => {
  const dispatch = useStoreDispatch()
  const modal = useStoreSelector((state) => state.ui.modal)

  const [postEdit, { isLoading, isSuccess }] = postsAPI.useUpdatePostMutation()

  const { register, handleSubmit } = useForm<T_PostEditFormData>({
    defaultValues: {
      ...modal.data,
    },
  })

  const handleSend = (data: T_PostEditFormData) => {
    postEdit({
      postId: String(data.id),
      body: {
        title: data.title,
        description: data.description,
        link: data.link,
      },
    })
  }

  useEffect(() => {
    if (isSuccess) dispatch(closeModal())
  }, [isSuccess])

  return (
    <S.Inner>
      <S.Form onSubmit={handleSubmit(handleSend)}>
        <S.TextField placeholder='Title' {...register('title')} />
        <S.TextField placeholder='Description' {...register('description')} />
        <S.TextField placeholder='Link' {...register('link')} />
        <S.CreateButton type='submit' disabled={isLoading}>
          Update
        </S.CreateButton>
      </S.Form>
    </S.Inner>
  )
}

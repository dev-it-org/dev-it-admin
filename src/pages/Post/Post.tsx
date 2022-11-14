import { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import * as S from './styles'

import { Loader } from 'components'
import { T_Post } from 'models/posts'
import { NotFound } from 'pages/NotFound'
import { postsAPI } from 'services'

export const Post = () => {
  const [post, setPost] = useState<T_Post>()

  const params = useParams<{ postId: string }>()

  const [getPost, { data: postData, isLoading }] = postsAPI.useLazyGetPostQuery()

  useLayoutEffect(() => {
    if (params) getPost(params.postId!)
  }, [params])

  useEffect(() => {
    if (postData) setPost(postData.data.post)
  }, [postData])

  if (isLoading) return <Loader />

  if (post)
    return (
      <S.Inner>
        <S.Title>{post.title}</S.Title>
        <S.Description>{post.description}</S.Description>
        <S.Link href={post.link}>Read more</S.Link>
      </S.Inner>
    )

  return <NotFound />
}

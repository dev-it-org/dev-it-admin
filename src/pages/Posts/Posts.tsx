import { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { Error, Loader } from 'components'
import { T_Post } from 'models/posts'
import { postsAPI } from 'services'

export const Posts = () => {
  const [posts, setPosts] = useState<T_Post[]>([])

  const navigate = useNavigate()

  const [getPosts, { data: postsData, isLoading }] = postsAPI.useLazyGetPostsQuery()

  useLayoutEffect(() => {
    getPosts({
      limit: '',
      page: '',
      sort: '',
      title: '',
    })
  }, [])

  useEffect(() => {
    if (postsData) setPosts(postsData.data.posts)
  }, [postsData])

  const handleOpenPost = (postId: number) => {
    navigate(`${postId}`)
  }

  if (isLoading) return <Loader />

  if (posts)
    return (
      <S.Inner>
        <S.TextField placeholder='Search posts by title' />
        <S.PostsWrapper>
          {posts.map((post) => {
            return (
              <S.Post key={post.id} onClick={() => handleOpenPost(post.id)}>
                {post.title}
              </S.Post>
            )
          })}
        </S.PostsWrapper>
      </S.Inner>
    )

  return <Error />
}

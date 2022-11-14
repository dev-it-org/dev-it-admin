import { ChangeEvent, useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from 'use-debounce'

import * as S from './styles'

import { Error, Loader } from 'components'
import { T_Post } from 'models/posts'
import { postsAPI } from 'services'

export const Posts = () => {
  const [posts, setPosts] = useState<T_Post[]>([])
  const [value, setValue] = useState<string>('')

  const [newFilteredValue] = useDebounce(value, 500)

  const navigate = useNavigate()

  const [getPosts, { data: postsData, isLoading }] = postsAPI.useLazyGetPostsQuery()

  useLayoutEffect(() => {
    getPosts({
      limit: '',
      page: '',
      sort: '',
      title: newFilteredValue,
    })
  }, [newFilteredValue])

  useEffect(() => {
    if (postsData) setPosts(postsData.data.posts)
  }, [postsData])

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  const handleOpenPost = (postId: number) => {
    navigate(`${postId}`)
  }

  if (isLoading) return <Loader />

  if (posts)
    return (
      <S.Inner>
        <S.TextField
          placeholder='Search posts by title'
          value={value}
          onChange={handleChangeValue}
        />
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

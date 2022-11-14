import { useEffect, useLayoutEffect, useState } from 'react'

import { T_PostsTableProps } from './models'
import * as S from './styles'

import { Error, Loader } from 'components'
import { E_Window } from 'models/modal'
import { T_Post } from 'models/posts'
import { postsAPI } from 'services'

export const PostsTable = ({ handleOpenModal }: T_PostsTableProps) => {
  const [postsInstance, setPostsInstance] = useState<{
    posts: T_Post[]
    count: number
    total: number
    page: number
    limit: number
  }>()

  const [getPosts, { data: postsData, isLoading }] = postsAPI.useLazyGetPostsQuery()
  const [deletePost, { isLoading: isPostDeleting }] = postsAPI.useDeletePostMutation()

  useLayoutEffect(() => {
    getPosts({
      limit: '',
      page: '',
      sort: '',
      title: '',
    })
  }, [])

  useEffect(() => {
    if (postsData) setPostsInstance(postsData.data)
  }, [postsData])

  const handleCreatePost = () => {
    handleOpenModal(E_Window.postCreate, null)
  }

  const handleToggle = (data: T_Post) => {
    handleOpenModal(E_Window.postEdit, data)
  }

  const handleDeletePost = (postId: number) => {
    deletePost(String(postId))
  }

  if (isLoading) return <Loader />

  if (postsInstance)
    return (
      <S.Inner>
        <S.CreateButton onClick={handleCreatePost}>Create post</S.CreateButton>
        <S.PostsWrapper>
          {postsInstance.posts.map((post) => {
            return (
              <S.Post key={post.id} onDoubleClick={() => handleToggle(post)}>
                <S.Title>{post.title}</S.Title>
                <S.ButtonGroup>
                  <S.EditButton onClick={() => handleToggle(post)}>Edit</S.EditButton>
                  <S.DeleteButton
                    disabled={isPostDeleting}
                    onClick={() => handleDeletePost(post.id)}
                  >
                    Delete
                  </S.DeleteButton>
                </S.ButtonGroup>
              </S.Post>
            )
          })}
        </S.PostsWrapper>
      </S.Inner>
    )

  return <Error />
}

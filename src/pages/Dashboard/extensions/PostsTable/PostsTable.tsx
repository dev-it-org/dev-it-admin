import { useEffect, useLayoutEffect, useState } from 'react'

import { T_PostsTableProps } from './models'

import { Error, Loader } from 'components'
import { E_Window } from 'models/modal'
import { T_Post } from 'models/posts'
import { postsAPI } from 'services'

export const PostsTable = ({ handleOpenModal }: T_PostsTableProps) => {
  const [posts, setPosts] = useState<T_Post[]>([])

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

  const handleDoubleClick = (data: T_Post) => {
    handleOpenModal(E_Window.postEdit, data)
  }

  if (isLoading) return <Loader />

  if (posts)
    return (
      <div>
        Posts
        <div>
          {posts.map((post) => {
            return (
              <div key={post.id} onDoubleClick={() => handleDoubleClick(post)}>
                {post.title}
              </div>
            )
          })}
        </div>
      </div>
    )

  return <Error />
}

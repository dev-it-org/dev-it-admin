import { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Error, Loader } from 'components'
import { T_Post } from 'models/posts'
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
      <div>
        Post
        <div>
          <div>{post.title}</div>
          <div>{post.description}</div>
          <div>{post.link}</div>
        </div>
      </div>
    )

  return <Error />
}

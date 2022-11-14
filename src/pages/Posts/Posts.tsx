import { ChangeEvent, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from 'use-debounce'

import { PostsExtension } from './PostsExtension'
import * as S from './styles'

import { Error, Loader } from 'components'
import { T_Post } from 'models/posts'
import { postsAPI } from 'services'

export const Posts = () => {
  const [postsInstance, setPostsInstance] = useState<{
    posts: T_Post[]
    count: number
    total: number
    page: number
    limit: number
  }>()
  const [value, setValue] = useState<string>('')
  const [page, setPage] = useState<number | string>(1)
  const [limit, setLimit] = useState<number | string>(5)
  const [sort, setSort] = useState<string>('')

  const [newFilteredValue] = useDebounce(value, 500)

  const navigate = useNavigate()

  const [getPosts, { data: postsData, isLoading }] = postsAPI.useLazyGetPostsQuery()

  useLayoutEffect(() => {
    getPosts({
      limit: String(limit),
      page: String(page),
      sort: String(sort),
      title: String(newFilteredValue),
    })
  }, [newFilteredValue, page, limit, sort])

  useEffect(() => {
    if (postsData) setPostsInstance(postsData.data)
  }, [postsData])

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  const handleChangeLimit = (value: string) => {
    setLimit(value)
  }

  const handleChangeSort = (value: string) => {
    setSort(value)
  }

  const handleOpenPost = (postId: number) => {
    navigate(`${postId}`)
  }

  useEffect(() => {
    setPage(newFilteredValue ? '' : 1)
    setLimit(newFilteredValue ? '' : 5)
  }, [newFilteredValue])

  useEffect(() => {
    if (postsInstance)
      if (Math.ceil(postsInstance.total / Number(limit)) < page) {
        setPage(1)
      }
  }, [postsInstance, page])

  const renderPagination = useMemo(() => {
    if (postsInstance && page && limit)
      return [...Array(Math.ceil(postsInstance.total / Number(limit)))].map((_, index) => {
        return (
          <S.PaginationButton
            key={index + 1}
            isActive={page === index + 1}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </S.PaginationButton>
        )
      })
  }, [postsInstance, page, limit])

  if (isLoading) return <Loader />

  if (postsInstance)
    return (
      <S.Inner>
        <PostsExtension
          value={value}
          limit={limit}
          sort={sort}
          handleChangeValue={handleChangeValue}
          handleChangeLimit={handleChangeLimit}
          handleChangeSort={handleChangeSort}
        />
        <S.PostsWrapper>
          {postsInstance.posts.map((post) => {
            return (
              <S.Post key={post.id} onClick={() => handleOpenPost(post.id)}>
                {post.title}
              </S.Post>
            )
          })}
          <S.Pagination>{renderPagination}</S.Pagination>
        </S.PostsWrapper>
      </S.Inner>
    )

  return <Error />
}

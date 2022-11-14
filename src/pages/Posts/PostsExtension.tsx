import { limitOptions } from './data'
import { T_PostExtensionProps } from './models'
import * as S from './styles'

import { E_OrderBy } from 'models/posts'

export const PostsExtension = ({
  value,
  limit,
  sort,
  handleChangeValue,
  handleChangeLimit,
  handleChangeSort,
}: T_PostExtensionProps) => {
  return (
    <>
      <S.TextField placeholder='Search posts by title' value={value} onChange={handleChangeValue} />
      <S.Select value={limit} onChange={(event) => handleChangeLimit(event.target.value)}>
        {limitOptions.map((option) => {
          return (
            <S.Option key={option.value} value={option.value}>
              {option.label}
            </S.Option>
          )
        })}
      </S.Select>
      <S.Select value={sort} onChange={(event) => handleChangeSort(event.target.value)}>
        {Object.values(E_OrderBy).map((order, index) => {
          return (
            <S.Option key={index} value={order}>
              {order}
            </S.Option>
          )
        })}
      </S.Select>
    </>
  )
}

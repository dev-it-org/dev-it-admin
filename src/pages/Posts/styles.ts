import styled from 'styled-components'

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 0 auto;
`

export const TextField = styled.input`
  width: 100%;
  padding: 12px 18px;

  font-size: 15px;
  color: #777;

  background-color: transparent;
  border: 0;
  box-shadow: 0 0 1px 1px #2d3844;
`

export const Select = styled.select`
  width: 100%;
  padding: 12px 18px;

  font-size: 15px;
  color: #777;

  background-color: transparent;
  border: 0;
  outline: none;
  box-shadow: 0 0 1px 1px #2d3844;
`

export const Option = styled.option``

export const Label = styled.div`
  margin: 10px 0 6px;
  padding: 0;

  font-size: 15px;
  font-weight: 700;
  color: #929a9e;
`

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Post = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;

  width: 100%;
  min-height: 55px;
  padding: 12px 18px;

  font-size: 15px;
  font-weight: 700;
  color: #87a3bf;

  background-color: #2d3844;
  border-top: 1px solid #495867;

  &:hover {
    background-color: #45515f;
  }
`

export const Pagination = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 12px 0;
`

interface I_PaginationButtonProps {
  isActive: boolean
}

export const PaginationButton = styled.button<I_PaginationButtonProps>`
  cursor: pointer;

  min-width: 42px;
  max-width: 42px;
  padding: 9px 15px;

  color: #fff;

  background-color: ${({ isActive }) => (isActive ? '#999' : 'transparent')};
  border: 0;
  box-shadow: 0 0 1px 1px #495867;
`

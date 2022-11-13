import styled from 'styled-components'

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 675px;
  margin: 0 auto;
`

export const TextField = styled.input`
  width: 100%;
  padding: 9px 24px;

  font-size: 15px;

  border: 0;
  box-shadow: 0 0 2px 0 #999;
`

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
  gap: 12px;
  align-items: center;
`

export const Post = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;

  width: 100%;
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

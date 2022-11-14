import styled from 'styled-components'

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;

  width: 100%;
`

export const CreateButton = styled.button`
  cursor: pointer;

  padding: 6px 18px;

  font-size: 15px;
  font-weight: 700;
  color: #87a3bf;

  background-color: #495867;
  border: 0;
`

export const UsersWrapper = styled.div`
  width: 100%;
`

export const User = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;

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

export const Typography = styled.div``

export const ButtonGroup = styled.div`
  display: flex;
`

export const EditButton = styled.button`
  cursor: pointer;

  padding: 6px 18px;

  color: #fff;

  background-color: #232a30;
  border: 0;

  &:hover {
    background-color: #87a3bf;
  }
`

export const DeleteButton = styled.button`
  cursor: pointer;

  padding: 6px 18px;

  color: #fff;

  background-color: #495867;
  border: 0;

  &:hover {
    background-color: #87a3bf;
  }
`

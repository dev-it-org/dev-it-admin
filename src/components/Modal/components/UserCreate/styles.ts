import styled from 'styled-components'

export const Inner = styled.div`
  background-color: #2d3844;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  padding: 18px;
`

export const TextField = styled.input`
  width: 100%;
  padding: 9px 18px;

  font-size: 15px;
  font-weight: 600;
  color: #777;

  background-color: transparent;
  border: 0;
  box-shadow: 0 0 1px 1px #495867;
`

export const CreateButton = styled.button`
  cursor: pointer;

  padding: 9px 18px;

  color: #fff;

  background-color: #232a30;
  border: 0;

  &:hover {
    background-color: #87a3bf;
  }
`

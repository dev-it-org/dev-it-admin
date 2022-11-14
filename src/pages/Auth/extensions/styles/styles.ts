import styled from 'styled-components'

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: 18px;
`

export const Box = styled.div`
  display: flex;
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  width: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
`

export const Typography = styled.div``

export const Button = styled.button`
  cursor: pointer;

  width: 100%;
  padding: 9px 18px;

  color: #fff;

  background-color: #232a30;
  border: 0;

  &:hover {
    background-color: #87a3bf;
  }
`

export const LinkButton = styled.button`
  cursor: pointer;

  font-size: 12px;
  color: #fff;
  text-decoration: underline;

  background-color: transparent;
  border: 0;
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

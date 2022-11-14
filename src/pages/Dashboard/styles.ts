import styled from 'styled-components'

export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  width: 100%;
`

interface I_ButtonProps {
  $mode: boolean
}

export const Button = styled.button<I_ButtonProps>`
  cursor: pointer;

  padding: 9px 18px;

  font-size: 16px;
  color: ${({ $mode }) => ($mode ? '#929a9e' : '#495867')};

  background-color: ${({ $mode }) => ($mode ? '#495867' : 'transparent')};
  border: 1px solid #495867;
`

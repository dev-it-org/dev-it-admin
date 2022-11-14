import styled from 'styled-components'

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  padding: 0 24px;
`

export const ButtonLink = styled.button`
  cursor: pointer;

  height: 100%;
  padding: 0 12px;

  font-size: 17px;
  color: #929a9e;

  background-color: transparent;
  border: 0;
  border-right: 1px solid #495867;

  transition: background-color 0.2s ease;

  &:first-child {
    border-left: 1px solid #495867;
  }

  &:hover {
    color: #87a3bf;
    background-color: #495867;
  }
`

export const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  height: 100%;
  padding: 0 24px;

  @media (max-width: 500px) {
    display: none;
  }
`

export const MyInfoEmail = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #929a9e;
`

export const MyInfoRole = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #929a9e;
`

import styled from 'styled-components'

export const Inner = styled.div`
  height: 100%;
  margin-top: 64px;
`

export const Header = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 64px;

  font-size: 14px;

  background-color: #2d3844;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 50%);
`

export const Content = styled.div`
  position: relative;

  max-width: 968px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 32px 0;

  background-color: #1b1f23;
`

export const ContentInner = styled.div`
  max-width: 95%;
  margin: 0 auto;
`

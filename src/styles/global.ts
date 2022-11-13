import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;

    font-family: Montserrat, sans-serif;
    font-size: 16px;

    background-color: #fff;
  }

  body {
      &.locked {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif !important;
  }

  button,input,ul,li,textarea {
    font-family: Montserrat, sans-serif;
    outline: none;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }

  ul {
    list-style-type: none;
  }
  
  a, a:visited {
    text-decoration: none;
  }
`

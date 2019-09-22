import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    font-family: 'Helvetica', 'Arial', sans-serif;
    background-color: #333333;
    min-height: 100%;
  }
`

export default GlobalStyle

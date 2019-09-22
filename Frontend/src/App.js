import React, { Fragment } from 'react'

import GlobalStyle from './globals/style'
import Movies from './pages/Movies'
import Header from './components/Header'

function App () {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Movies />
    </Fragment>
  )
}

export default App

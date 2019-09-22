import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import GlobalStyle from './globals/style'
import Movies from './pages/Movies'
import Details from './pages/Details'
import Header from './components/Header'

function App () {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Movies} />
          <Route path="/details/:movie" component={Details} />
        </div>
      </Router>
    </Fragment>
  )
}

export default App

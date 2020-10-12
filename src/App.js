import React from 'react'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import { HomePage } from './components/homepage/HomePage'
import { PrivateRoute } from './PrivateRoute'
import { history } from './helpers/history'

const token = window.localStorage.getItem('token')


export default function App() {

  return (
    <React.Fragment>
      <Router history={history}>
        <div>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
      {/* <LoginPage /> */}
      {/* <HomePage /> */}
    </React.Fragment>
  )
}

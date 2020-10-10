import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import { HomePage } from './components/homepage/HomePage'
import { PrivateRoute } from './PrivateRoute'




const token = window.localStorage.getItem('token')

export default function App() {

  return (
    <React.Fragment>
      <LoginPage />
      {/* <HomePage /> */}
    </React.Fragment>
  )
}

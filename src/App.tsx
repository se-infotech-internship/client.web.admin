import React, { useState, useEffect } from 'react'

import SignIn from './components/SignIn'
import TopBar from './components/TopBar'
import ListUsers from './components/ListUsers'

const token = window.localStorage.getItem('token')

export default function App() {
  const [successLogin, setSuccessLogin] = useState(false)

  useEffect(() => {
    if (token) {
      setSuccessLogin(true)
    }
  }, []);


  const loginScreen = <SignIn />

  const adminScreen = (
    <React.Fragment>
      <TopBar />
      <ListUsers />
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {successLogin ? adminScreen : loginScreen}
    </React.Fragment>
  )
}

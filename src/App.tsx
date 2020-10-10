import React from 'react'

import LoginPage from './components/LoginPage'
import TopBar from './components/TopBar'
import ListUsers from './components/ListUsers/List.users'


const token = window.localStorage.getItem('token')

export default function App() {

  return (
    <React.Fragment>
      {/* <LoginPage /> */}
      <TopBar />
      <ListUsers />
    </React.Fragment>
  )
}

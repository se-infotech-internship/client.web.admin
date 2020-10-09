import React, { useState, useEffect } from 'react'

import Box from '@material-ui/core/Box';

import LoginPage from './components/LoginPage'
import TopBar from './components/TopBar'
import LeftPanel from './components/LeftPanel'

const token = window.localStorage.getItem('token')

export default function App() {

  return (
    <React.Fragment>
      {/* <LoginPage /> */}
      <TopBar />
      <Box>
        <LeftPanel />
      </Box>
    </React.Fragment>
  )
}

import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './redux/store'
import { authUser } from './redux/reducers/userReducer'

import LoginPage from './components/LoginPage'
import HomePage from './components/homepage/HomePage'
import UserPage from './components/userpage/UserPage'

import SearchPage from './components/search-page/SearchPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'





export default function App() {
  const dispatch = useDispatch()

  const isAuth = useSelector((state: RootState) => state.users.isAuth)


  // Чтобы при перезугрузке не терят сессию
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      dispatch(authUser())
    }
  })


  return (
    <Router>
      <Switch>
        {
          isAuth ?
            <>
              <Route path="/home" component={HomePage} />
              <Redirect to="/home" />
              <Route path="/user" component={UserPage} />
              <Route path="/search" component={SearchPage} />
            </>
            :
            <>
              <Route path="/login" component={LoginPage} />
              <Redirect to="/login" />
            </>
        }

      </Switch>
    </Router>
  )
}













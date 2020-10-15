import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

import LoginPage from './components/LoginPage'
import HomePage from './components/homepage/HomePage'



export default function App() {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  return (
    <div>
      {isAuth ? <HomePage /> : <LoginPage />}
    </div>
  );
}

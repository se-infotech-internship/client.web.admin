import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

import LoginPage from './components/LoginPage'
import HomePage from './components/homepage/HomePage'

<<<<<<< HEAD
=======
export default function App() {
  const [successLogin, setSuccessLogin] = useState(false)

  // useEffect(() => {
  //   if (token) {
  //     setSuccessLogin(true)
  //   }
  // }, []);
>>>>>>> d469f9b18b6d598ccaa6c5032aaac7db951d96a9


export default function App() {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  return (
    <div>
      {isAuth ? <HomePage /> : <LoginPage />}
    </div>
  );
}

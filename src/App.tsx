import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

import LoginPage from './components/LoginPage';
import HomePage from './components/homepage/HomePage';


export default function App() {
  const isAuth = useSelector((state: RootState) => state.users.isAuth);

  return (
    <div>
      {isAuth ? <HomePage /> : <LoginPage />}
      {/* <LoginPage /> */}
    </div>

  );
}











// import React from 'react';

// import { useSelector } from 'react-redux';
// import { RootState } from './redux/store';

// import LoginPage from './components/LoginPage'
// import HomePage from './components/homepage/HomePage'



// export default function App() {
//   // С RootState  не работает, исправить
//   const isAuth = useSelector((state: any) => state.user.isAuth);

//   return (
//     <div>
//       {!isAuth ? <HomePage /> : <LoginPage />}
//     </div>
//   );
// }

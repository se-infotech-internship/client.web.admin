import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

import LoginPage from './components/LoginPage';
import HomePage from './components/homepage/HomePage';
import UserPage from './components/userpage/UserPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default function App() {
  const isAuth = useSelector((state: RootState) => state.users.isAuth);
  return (
    <Router>
      <Switch>
        {
          isAuth ?
            <>
              <Route path="/home" component={HomePage} />
              <Redirect to="/home" />
              <Route path="/user">
                <UserPage />
              </Route>
            </>
            :
            <>
              <Route path="/login" component={LoginPage} />
              <Redirect to="/login" />
            </>
        }
      </Switch>
    </Router>

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

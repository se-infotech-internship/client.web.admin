import React from 'react';

import TopBar from './components/TopBar';
import ListUsers from './components/ListUsers';

export default function App() {
  return (
    <React.Fragment>
      <TopBar />
      <ListUsers />
    </React.Fragment>
  );
}


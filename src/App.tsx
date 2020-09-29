import React from "react";

import SignIn from "./components/SignIn";
import TopBar from "./components/TopBar";
import ListUsers from "./components/ListUsers";

export default function App() {
  const [sign, setSign] = React.useState(true);

  const loginScreen = <SignIn />;

  const adminScreen = (
    <React.Fragment>
      <TopBar />
      <ListUsers />
    </React.Fragment>
  );

  return <React.Fragment>{sign ? adminScreen : loginScreen}</React.Fragment>;
}

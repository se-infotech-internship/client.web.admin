import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import "./ListUsers.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

import { useSelector, useDispatch } from "react-redux";
import { selectUsers, deleteUser } from "../redux/usersSlice";

import UserInfo from "./UserInfo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "93vh",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      borderRight: "3px solid grey",
    },
    large: {
      width: theme.spacing(37),
      height: theme.spacing(37),
      margin: "50px auto",
      objectFit: "fill",
    },
  })
);

export default function ListUsers() {
  const [userPage, setUserPage] = React.useState({
    id: "",
    name: "",
    mail: "",
    phone: "",
    vehNum: "",
    status: true,
    photo: "",
  });

  const classes = useStyles();
  const usersList = useSelector(selectUsers);

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div className={classes.root}>
          <List>
            {usersList.map((user) => (
              <Link
                to={"/" + user.id}
                style={{
                  textDecoration: "none",
                  // border: "1px solid green",
                  // width: "100%",
                }}
              >
                <ListItem
                  button
                  key={user.id}
                  divider={true}
                  // style={{ border: "1px solid orange" }}
                  onClick={() =>
                    setUserPage({
                      id: user.id,
                      name: user.name,
                      mail: user.mail,
                      phone: user.phone,
                      vehNum: user.vehNum,
                      status: user.status,
                      photo: user.photo,
                    })
                  }
                >
                  <ListItemText
                    primary={user.name}
                    // style={{ border: "1px solid red" }}
                  />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
        <div className="main-block">
          <Switch>
            <Route path={"/" + userPage.id}>
              {/* <UserInfo /> */}
              <div className="top-block">
                <div className="top-block-left">
                  <Avatar
                    alt="avatar user"
                    src={userPage.photo}
                    className={classes.large}
                    variant="rounded"
                  />
                  <h2 style={{ textAlign: "center" }}>{userPage.name}</h2>
                </div>
                <div className="top-block-right">
                  <button>block / unblock user</button>
                  <p>name: {userPage.name}</p>
                  <p>email: {userPage.mail}</p>
                  <p>phone: {userPage.phone}</p>
                  <p>vehicle number: {userPage.vehNum}</p>
                  <p>staus: {userPage.status ? "Active" : "Block"}</p>
                  <form>
                    <textarea id="story" name="story" rows={10} cols={63}>
                      Send message...
                    </textarea>
                    <div>
                      <input type="submit" value="Send" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="bottom-block">
                <table style={{ width: "98%", margin: "30px auto" }}>
                  <thead>
                    <tr>
                      <th>Header content </th>
                      <th>Header content </th>
                      <th>Header content </th>
                      <th>Header content </th>
                      <th>Header content </th>
                      <th>Header content </th>
                      <th>Header content </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ height: "30vh" }}>
                      <td>Body content 1</td>
                      <td>Body content 2</td>
                      <td>Body content 2</td>
                      <td>Body content 2</td>
                      <td>Body content 2</td>
                      <td>Body content 2</td>
                      <td>Body content 2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

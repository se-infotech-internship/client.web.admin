import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import "./ListUsers.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Avatar from "@material-ui/core/Avatar";

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

const fakeUsers = [
  {
    id: "123",
    name: "Louis N. Thomas",
    mail: "thomas@gmail.com",
    phone: "+380934562312",
    vehNum: "AA 94534 KK",
    status: true,
    photo: "https://bold.textcontrol.com/images/authors/Bjoern%20Meyer.jpg",
  },
  {
    id: "345",
    name: "Martina L. Maynes",
    mail: "martin@gmail.com",
    phone: "+380354562185",
    vehNum: "HA 18426 TH",
    status: false,
    photo:
      "https://cdn.pixabay.com/photo/2018/04/04/10/11/portrait-3289372_960_720.jpg",
  },
];

export default function ListUsers() {
  const [user, setUser] = React.useState({
    id: "",
    name: "",
    mail: "",
    phone: "",
    vehNum: "",
    status: true,
    photo: "",
  });

  const classes = useStyles();

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div className={classes.root}>
          <List>
            {fakeUsers.map((item) => (
              <ListItem button key={item.id} divider={true}>
                <Link to={"/" + item.id} style={{ textDecoration: "none" }}>
                  <ListItemText
                    primary={item.name}
                    onClick={() =>
                      setUser({
                        id: item.id,
                        name: item.name,
                        mail: item.mail,
                        phone: item.phone,
                        vehNum: item.vehNum,
                        status: item.status,
                        photo: item.photo,
                      })
                    }
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
        <div className="main-block">
          <Switch>
            <Route path={"/" + user.id}>
              {/* <UserInfo /> */}
              <div className="top-block">
                <div className="top-block-left">
                  <Avatar
                    alt="avatar user"
                    src={user.photo}
                    className={classes.large}
                    variant="rounded"
                  />
                  <h2 style={{ textAlign: "center" }}>{user.name}</h2>
                </div>
                <div className="top-block-right">
                  <button>block / unblock user</button>
                  <p>name: {user.name}</p>
                  <p>email: {user.mail}</p>
                  <p>phone: {user.phone}</p>
                  <p>vehicle number: {user.vehNum}</p>
                  <p>staus: {user.status ? "Active" : "Block"}</p>
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

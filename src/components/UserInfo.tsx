import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userAvatar: {
      width: theme.spacing(37),
      height: theme.spacing(37),
      margin: "50px auto",
      objectFit: "fill",
    },
  })
);

export default function UserInfo(props: any) {
  const classes = useStyles();

  return (
    <div>
      <div className="top-block">
        <div className="top-block-left">
          <Avatar
            alt="avatar user"
            src={props.photo}
            className={classes.userAvatar}
            variant="rounded"
          />
          <h2 style={{ textAlign: "center" }}>{props.name}</h2>
        </div>
        <div className="top-block-right">
          <button>block / unblock user</button>
          <p>name: {props.name}</p>
          <p>email: {props.mail}</p>
          <p>phone: {props.phone}</p>
          <p>vehicle number: {props.vehNum}</p>
          <p>staus: {props.status ? "Active" : "Block"}</p>
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
    </div>
  );
}

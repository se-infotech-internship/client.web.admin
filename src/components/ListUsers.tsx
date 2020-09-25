import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import './ListUsers.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import UserInfo from './UserInfo';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            height: '93vh',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            borderRight: '3px solid grey'
        },
    }),
);


const fakeUsers = [
    { id: '123', name: 'Louis N. Thomas' },
    { id: '345', name: 'Martin L. Maynes' }
]


export default function ListUsers() {
    const [user, setUser] = React.useState({ id: '', name: '' });

    const classes = useStyles();



    return (
        <Router>
            <div style={{ display: "flex" }}>
                <div className={classes.root}>
                    <List>
                        {fakeUsers.map(item => (
                            <ListItem button key={item.id} >
                                <Link to={'/' + item.id} style={{ textDecoration: 'none' }} >
                                    <ListItemText primary={item.name} onClick={() => setUser({ id: item.id, name: item.name })} />
                                </Link>
                            </ListItem>
                        ))}
                    </List>

                </div>
                <div className="main-block">
                    <Switch>
                        <Route path={'/' + user.id}>
                            {/* <UserInfo /> */}
                            <div className="top-block">
                                <div className="top-block-left">
                                    BLOCK LEFT
                                    
                                </div>
                                <div className="top-block-right">
                                    BLOCK RIGHT
                                </div>
                            </div>
                            <div className="bottom-block">
                                bottom block
                            </div>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
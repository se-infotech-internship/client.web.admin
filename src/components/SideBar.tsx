import React from 'react'
import { Link } from 'react-router-dom'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PeopleIcon from '@material-ui/icons/People'
import MessageIcon from '@material-ui/icons/Message'



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        leftList: {
            width: '20%',
            height: '100vh',
            // maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            borderRight: '3px solid grey',
        },
        wrapper_links: {
            marginTop: 25,
            // border: "1px solid red"
        },
        link_component: {
            textDecoration: 'none',
            color: 'grey'
        }
    })
)

export default function SideBar() {
    const classes = useStyles()
    return (
        <div className={classes.leftList}>
            <div className={classes.wrapper_links}>
                <Link to="/home" className={classes.link_component}>
                    <ListItem button>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Користувачі" />
                    </ListItem>
                </Link>
                <ListItem button>
                    <ListItemIcon>
                        <MessageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Шаблони сповіщень" />
                </ListItem>
            </div>
        </div>
    )
}


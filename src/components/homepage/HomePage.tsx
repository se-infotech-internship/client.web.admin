import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import TopBar from '../TopBar'
import TableUsers from '../TableUsers'
import SideBar from '../SideBar'


const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
})



export default function HomePage() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <TopBar />
            <div className={classes.root}>
                <SideBar />
                <TableUsers />
            </div>
        </React.Fragment>
    )
}
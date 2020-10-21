import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import TopBar from '../TopBar'
import CardUser from './CardUser'
import SideBar from '../SideBar'


const useStyles = makeStyles({
    root: {
        display: 'flex'
    }
})


export default function UserPage() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <TopBar />
            <div className={classes.root}>
                <SideBar />
                <CardUser />
            </div>
        </React.Fragment>
    )
}
import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import TopBar from '../TopBar'
import SideBar from '../SideBar'
import SearchTable from './SearchTable'


const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
})



export default function SearchPage() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <TopBar />
            <div className={classes.root}>
                <SideBar />
                <SearchTable />
            </div>
        </React.Fragment>
    )
}
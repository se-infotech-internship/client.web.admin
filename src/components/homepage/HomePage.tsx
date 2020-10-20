import React from 'react'

import TopBar from '../TopBar'
import TableUsers from '../TableUsers'
import SideBar from '../SideBar'

export default function HomePage() {
    return (
        <React.Fragment>
            <TopBar />
            <div style={{ display: 'flex' }}>
                <SideBar />
                <TableUsers />
            </div>
        </React.Fragment>
    )
}
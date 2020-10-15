import React from 'react'

import TopBar from '../TopBar'
import LeftPanel from '../LeftPanel'
import TableUsers from '../TableUsers'

export default function HomePage() {
    return (
        <React.Fragment>
            <TopBar />
            <div style={{ display: 'flex' }}>
                <LeftPanel />
                <TableUsers />
            </div>
        </React.Fragment>
    )
}
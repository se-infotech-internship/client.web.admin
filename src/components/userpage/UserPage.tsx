import React from 'react'

import TopBar from '../TopBar'
import LeftPanel from '../LeftPanel'
import CardUser from './CardUser'

export default function UserPage() {
    return (
        <React.Fragment>
            <TopBar />
            <div style={{ display: 'flex' }}>
                <LeftPanel />
                <CardUser />
            </div>
        </React.Fragment>
    )
}
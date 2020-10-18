import React from 'react'

import TopBar from '../TopBar'
import LeftPanel from '../LeftPanel'

export default function UserPage() {
    return (
        <React.Fragment>
            <TopBar />
            <div style={{ display: 'flex' }}>
                <LeftPanel />
                <h2>USER PAGE</h2>
            </div>
        </React.Fragment>
    )
}
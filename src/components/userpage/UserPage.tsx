import React from 'react'

import TopBar from '../TopBar'
import CardUser from './CardUser'
import SideBar from '../SideBar'

export default function UserPage() {
    return (
        <React.Fragment>
            <TopBar />
            <div style={{ display: 'flex' }}>
                <SideBar />
                <CardUser />
            </div>
        </React.Fragment>
    )
}
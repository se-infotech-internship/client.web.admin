import React from 'react'

import LeftPanel from '../LeftPanel'
import TableUsers from '../TableUsers'

export default function ListUsers() {
    return (
        <div style={{ display: 'flex' }}>
            <LeftPanel />
            <TableUsers />
        </div>
    )
}
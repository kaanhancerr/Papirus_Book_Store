import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
    return (
        <>
            <Sidebar />
            <Topbar />
            <Outlet />
        </>
    )
}

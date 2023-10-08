import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'

function AppRoutes() {
    return (
        <Routes>
            <Route index element={<Home to="/home" />} />
        </Routes>
    )
}

export default AppRoutes
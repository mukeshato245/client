import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticate } from '../api/userAPI'

const AdminRoute = () => {
  return (
    isAuthenticate() && isAuthenticate().user.role===1 ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default AdminRoute
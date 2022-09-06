import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticate } from '../api/userAPI'

const UserRoute = () => {
  return (
    isAuthenticate() && isAuthenticate().user.role===0 ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default UserRoute
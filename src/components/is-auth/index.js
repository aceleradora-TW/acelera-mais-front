import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const IsAuth = ({ mentorType = ['admin', 'mentor'] }) => {
  const location = useLocation()
  const role = localStorage.getItem('role')

  if (localStorage.getItem('token') && mentorType.includes(role)) {
    return <Outlet />
  }
  return <Navigate to="/" state={{ from: location }} />
}

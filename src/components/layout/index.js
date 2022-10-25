import { Outlet } from 'react-router-dom'
import { Logout } from '../logout'
export const Layout = () => {
  return (
    <>
    <Logout />
      <Outlet />
    </>
  )
}

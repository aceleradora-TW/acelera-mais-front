import { Outlet } from 'react-router-dom'
import { Logout } from '../logout'
import { BackButton } from '../buttons/backButton'
import { NavBar } from './style'
export const Layout = () => {
  return (
    <>
      <NavBar>
        <BackButton />
        <Logout />
      </NavBar>
      <Outlet />
    </>
  )
}

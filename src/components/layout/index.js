import { Outlet } from 'react-router-dom'
import { Logout } from '../logout'
import { BackButton } from '../buttons/backButton'
import { NavBar } from './style'
import { Logo } from '../logo/logo'
export const Layout = () => {
  return (
    <>
      <NavBar>
        <Logo />
        <BackButton />
        <Logout />
      </NavBar>
      <Outlet />
    </>
  )
}

import { Outlet, useLocation } from 'react-router-dom'
import { Logout } from '../logout'
import { BackButton } from '../buttons/backButton'
import { NavBar, Navigation } from './style'
import { LogoComponent } from '../logo/logo'
import { GreetingText } from '../greetingText'

export const Layout = () => {
  return (
    <>
      <NavBar pathname={useLocation()}>
        <LogoComponent />
        <Navigation>
        <GreetingText />
        <BackButton />
        <Logout />
        </Navigation>
      </NavBar>
      <Outlet />
    </>
  )
}

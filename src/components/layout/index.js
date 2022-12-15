import { Outlet } from 'react-router-dom'
import { Logout } from '../logout'
import { BackButton } from '../buttons/backButton'
import { NavBar, Navigation } from './style'
import { LogoComponent } from '../logo/logo'
import { GreetingText } from '../greetingText'

export const Layout = () => {
  return (
    <>
      <NavBar>
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

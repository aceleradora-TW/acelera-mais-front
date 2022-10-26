import { Outlet } from 'react-router-dom'
import BackButton from '../buttons/backButton/index'
import { NavBar } from './style.js'
export const Layout = () => {
  return (
    <>
      <NavBar>
        <BackButton />
      </NavBar>
      <Outlet />
    </>
  )
}

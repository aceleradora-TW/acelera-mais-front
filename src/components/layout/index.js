import { Outlet } from 'react-router-dom'
import BackButton from '../buttons/backbutton/index'
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

import { Outlet } from 'react-router-dom'
<<<<<<< HEAD
import BackButton from '../buttons/backButton/index'
import { NavBar } from './style.js'
export const Layout = () => {
  return (
    <>
      <NavBar>
        <BackButton />
      </NavBar>
=======
import { Logout } from '../logout'
export const Layout = () => {
  return (
    <>
      <Logout />
>>>>>>> ed0f14af3ede70227ce48d09a7d032d501599a0c
      <Outlet />
    </>
  )
}

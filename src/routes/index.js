import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import LoginPage from '../pages/login-page'
import HiringProcessPage from '../pages/hiring-process'

const Routes = () => {
  return (
        <BrowserRouter>
            <Route component = {LoginPage} path = "/" exact />
            <Route component = {HiringProcessPage} path = "/hiring-process" exact />
        </BrowserRouter>
  )
}

export default Routes

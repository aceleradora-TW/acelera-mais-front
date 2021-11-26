import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import LoginPage from '../pages/login-page'
import HiringProcessPage from '../pages/hiring-process'
import { ExercisesPage } from '../pages/exercises'
import { HiringProcessForm } from '../components/forms/hiring-process'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={LoginPage} path="/" exact />
      <Route component={HiringProcessPage} path="/hiring-process" exact />
      <Route component={ExercisesPage} path="/exercises" />
      <Route component={HiringProcessForm} path="/form-create" exact />
    </BrowserRouter>
  )
}

export default Routes

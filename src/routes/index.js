import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import LoginPage from '../pages/login-page'
import HiringProcessPage from '../pages/hiring-process'
import { ExercisesPage } from '../pages/exercises'
import { HiringProcessForm } from '../components/forms/hiring-process'
import EvaluationChallenge from '../pages/evaluation-challenge'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={LoginPage} path="/" exact />
      <Route component={HiringProcessPage} path="/hiring-process" exact />
      <Route component={ExercisesPage} path="/exercises/:id" />
      <Route component={HiringProcessForm} path="/form-create" exact />
      <Route component={EvaluationChallenge} path="/evaluation-challenge" exact />
    </BrowserRouter>
  )
}

export default Routes

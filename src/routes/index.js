import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/login-page/index.js'
import HiringProcessPage from '../pages/hiring-process'
import { HiringProcessForm } from '../components/forms/hiring-process'
import { IsAuth } from '../pages/protected-route/index.js'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
        <Route path="/hiring-process" element={<IsAuth />} >
          <Route path="/hiring-process" element={<HiringProcessPage />} exact />
        </Route>
        <Route path="/form-create" element={<IsAuth />} >
          <Route path="/form-create" element={<HiringProcessForm />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

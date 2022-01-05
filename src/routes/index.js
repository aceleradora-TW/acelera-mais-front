import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/authentication/index'
import HiringProcessPage from '../pages/hiring-process'
import { IsAuth } from '../components/is-auth/index.js'
import { ExercisesPage } from '../pages/exercises'
import Evaluation from '../pages/evaluation'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
        <Route path="/hiring-process" element={<IsAuth />}>
          <Route path="/hiring-process" element={<HiringProcessPage />} exact />
        </Route>
        <Route path="/exercises" element={<IsAuth />}>
          <Route path="/exercises/hiring-process/:id" element={<ExercisesPage />} exact />
          <Route path="/exercises/:id/hiring-process/:id" element={<Evaluation />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

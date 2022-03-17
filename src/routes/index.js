import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/authentication/index'
import HiringProcessPage from '../pages/hiring-process'
import Evaluation from '../pages/evaluation'
import { IsAuth } from '../components/is-auth/index.js'
import { ChallengePage } from '../pages/challenges'
import { ExercisesPage } from '../pages/exercises'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
        <Route path="/hiring-process" element={<IsAuth />}>
          <Route path="/hiring-process" element={<HiringProcessPage />} exact />
        </Route>
        <Route path="/challenges" element={<IsAuth />}>
          <Route path="/challenges/hiring-process/:id" element={<ChallengePage />} exact />
          <Route path="/challenges/:id/hiring-process/:id" element={<Evaluation />} exact />
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

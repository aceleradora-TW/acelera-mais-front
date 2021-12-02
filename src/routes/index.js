import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/login-page/index.js'
import HiringProcessPage from '../pages/hiring-process'
import { IsAuth } from '../pages/protected-route/index.js'
import { ExercisesPage } from '../pages/exercises'
import EvaluationChallenge from '../pages/evaluation-challenge'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
        <Route path="/hiring-process" element={<IsAuth />}>
          <Route path="/hiring-process" element={<HiringProcessPage />} exact />
        </Route>
        <Route path="/exercises" element={<IsAuth />}>
          <Route path="/exercises/:id" element={<ExercisesPage />} exact />
        </Route>
        <Route>
        <Route path="/evaluation-challenge" element={<EvaluationChallenge />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

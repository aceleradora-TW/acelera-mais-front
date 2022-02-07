import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/authentication/index'
import HiringProcessPage from '../pages/hiring-process'
import { IsAuth } from '../components/is-auth/index.js'
import { ChallengePage } from '../pages/exercises'
import Evaluation from '../pages/evaluation'

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
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

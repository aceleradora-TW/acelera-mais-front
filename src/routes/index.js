import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/authentication/index'
import HiringProcessPage from '../pages/hiring-process'
import { UserChangePasswordPage } from '../pages/change-password'
import { HomePage } from '../pages/home'
import { IsAuth } from '../components/is-auth/index.js'
import { ChallengePage } from '../pages/challenges'
import Evaluation from '../pages/evaluation'
import MentorPage from '../pages/user'
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
        <Route path="/home" element={<HomePage />} exact />
        <Route path="/hiring-process" element={<IsAuth />}>
          <Route path="/hiring-process" element={<HiringProcessPage />} exact />
        </Route>
        <Route path="/user" element={<IsAuth />}>
          <Route path="/user" element={<MentorPage />} exact />
          <Route path="/user/change-password/:id" element={<UserChangePasswordPage />} exact />
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

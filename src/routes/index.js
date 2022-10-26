import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/authentication/index'
import HiringProcessPage from '../pages/hiring-process'
import { UserChangePasswordPage } from '../pages/change-password'
import { HomePage } from '../pages/home'
import { IsAuth } from '../components/is-auth/index.js'
import { ChallengePage } from '../pages/challenges'
import Evaluation from '../pages/evaluation'
import MentorPage from '../pages/user'
import { Layout } from '../components/layout'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
        <Route path="" element={<Layout />}>
        <Route path="/home" element={<IsAuth mentorType={['mentor', 'admin']}><HomePage /> </IsAuth>} exact />
          <Route path="/hiring-process" element={<IsAuth />}>
            <Route path="/hiring-process" element={<HiringProcessPage />} exact />
          </Route>
          <Route path="/user">
            <Route path="/user" element={<IsAuth mentorType={['admin']}><MentorPage /></IsAuth>} exact />
            <Route path="/user/change-password/:id" element={<IsAuth mentorType={['mentor', 'admin']}><UserChangePasswordPage /></IsAuth>} exact />
          </Route>
          <Route path="/challenges" element={<IsAuth />}>
            <Route path="/challenges/hiring-process/:id" element={<ChallengePage />} exact />
          </Route>
          <Route path="/exercise" element={<IsAuth />}>
            <Route path="/exercise/:id" element={<Evaluation />} exact />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default AppRoutes

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { RegisterModal } from './pages/mentor-registration/components/modal'
import './utils/i18next'

ReactDOM.render(
  <React.StrictMode>
    <RegisterModal />
  </React.StrictMode>,
  document.getElementById('root')
)

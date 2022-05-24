import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { HomePage } from './pages/home/index'
// import App from './App'
// import reportWebVitals from './reportWebVitals'
import './utils/i18next'

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()

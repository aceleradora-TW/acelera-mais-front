import React from 'react'
import { createRoot } from 'react-dom/client'
import './utils/i18next'
import App from './App'

const root = createRoot(document.getElementById('root'))
root.render(<App tab='home' />)

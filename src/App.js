import { HiringProcessForm } from './components/forms/hiring-process/index.js'
import Routes from './routes'
const App = () => {
  return (
    <div className="login-page">
      <Routes />
      <HiringProcessForm method="POST" />
    </div>


  )
}

export default App

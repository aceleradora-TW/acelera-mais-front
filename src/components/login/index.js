import { useState } from 'react'
import axios from 'axios'
import './style.css'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value)
  }

  const handleChangePassword = ({ target }) => {
    setPassword(target.value)
  }

  const handlerClick = (event) => {
    event.preventDefault()
    const user = {
      email, password
    }
    axios.post('http://localhost:9000/login', user).then(res => {
      alert(res.data.message)
    })
  }
  return (
    <div className="container-form">
      <h1>Login</h1>
      <form>
        <div>
          <label>
            <input onChange={handleChangeEmail} value={email} type="email" placeholder="Email@email.com"></input>
          </label>
          <label>
            <input onChange={handleChangePassword} value={password} type="password" placeholder="Senha"></input>
          </label>
        </div>
        <button onClick={handlerClick}>Iniciar sessão</button>
      </form>
    </div>
  )
}

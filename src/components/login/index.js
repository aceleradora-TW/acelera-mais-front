import { useState } from 'react'
import { client } from '../../service'
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
    client.post('/login', user).then(res => {
      alert(res.data.message)
    })
  }
  return (
    <div className="login-form">
      <div>
        <label>
          <input onChange={handleChangeEmail} value={email} type="email" placeholder="Email@email.com"></input>
        </label>
        <label>
          <input onChange={handleChangePassword} value={password} type="password" placeholder="Senha"></input>
        </label>
      </div>
      <button onClick={handlerClick}>Iniciar sessão</button>
    </div>
  )
}

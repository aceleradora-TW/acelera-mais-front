import { useState } from 'react'
import { useNavigate } from 'react-router'
import { client, setTokenInHeaders } from '../../service'
import './style.css'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value)
  }

  const handleChangePassword = ({ target }) => {
    setPassword(target.value)
  }

  const handlerClick = async (event) => {
    event.preventDefault()
    const user = {
      email, password
    }
    const response = await client.post('/login', user)
    console.log(response.data)

    const {
      data: { accessToken }
    } = response

    if (accessToken) {
      localStorage.setItem('token', accessToken)
      setTokenInHeaders(accessToken)
      navigate('/hiring-process')
    }
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

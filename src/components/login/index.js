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

    if (email === '' || email === undefined || password === '' || password === undefined) {
      return alert('Preencha o campo de e-mail e senha, por favor! ')
    }

    try {
      const response = await client.post('/login', user)
      const { data: { accessToken, user: { role } } } = response

      if (accessToken) {
        localStorage.setItem('token', accessToken)
        localStorage.setItem('role', role)
        setTokenInHeaders(accessToken)
        navigate('/hiring-process')
      }
    } catch (error) {
      console.log(error)
      alert('Usuário ou senha inválidos!')
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

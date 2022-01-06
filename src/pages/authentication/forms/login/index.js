import { useState } from 'react'
import { useNavigate } from 'react-router'
import { client, setTokenInHeaders } from '../../../../service'
import { LoginDivForm } from './styles'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mentorName, setMentorName] = useState('')
  const navigate = useNavigate()

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value)
  }

  const handleChangePassword = ({ target }) => {
    setPassword(target.value)
  }

  const handleChangeMentorName = ({ target }) => {
    setMentorName(target.value)
    localStorage.setItem('mentorName', target.value)
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
    <LoginDivForm>
      <div>
        <label>
          <input onChange={handleChangeEmail} value={email} type="email" placeholder="Email@email.com"></input>
        </label>
        <label>
          <input onChange={handleChangePassword} value={password} type="password" placeholder="Senha"></input>
        </label>
        <label>
          <input onChange={handleChangeMentorName} value={mentorName} type="text" placeholder="Nome da mentora especialista"></input>
        </label>
      </div>
      <button onClick={handlerClick}>Iniciar sessão</button>
    </LoginDivForm>
  )
}

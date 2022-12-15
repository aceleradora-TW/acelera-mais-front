import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import { client, setTokenInHeaders } from '../../../../service'
import {
  LoginForm
} from './styles'
import { Modal } from '../../../../components/modal'
import Button from '../../../../components/buttons/button'
import { InputEmail } from '../../../../components/inputs/email'

export const Login = () => {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mentors] = useState([])
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

    if (!email || !password) {
      return alert(t('login.fillAlert'))
    }

    try {
      const response = await client.post('/login', user)
      const { data: { accessToken, auth, user: { role, name, id } } } = response
      localStorage.setItem('token', accessToken)
      localStorage.setItem('role', role)
      localStorage.setItem('mentorName', name)
      setTokenInHeaders()
      if (!auth) {
        return navigate(`/user/change-password/${id}`)
      }
      navigate('/home')
    } catch (error) {
      console.log(error)
      alert(t('login.userPwdAlert'))
    }
  }

  const resendPassword = () => {
    mentors.map(mentor =>
      client.put('/login/email_verification',
        { email: mentor.email })
        .then(res => res.data)
        .then(res => alert(res.message))
        .catch(({ response }) => alert(response.data.msg))
    )
  }
  return (
    <LoginForm>
      <div className='teste'>
        <label>
          <input onChange={handleChangeEmail} value={email} type="email" placeholder="Email@email.com"></input>
        </label>
        <label>
          <input onChange={handleChangePassword} value={password} type="password" placeholder={t('login.password')}></input>
        </label>
        <Modal className={'modal'} title={'Esqueci minha senha'} text={'esqueci senha'}>
          <InputEmail onChange={handleChangeEmail} value={email} label={'Informe seu email abaixo'} />
          <div className='enviar'>
            <Button className={'primary'} text={'Enviar'} onClick={resendPassword} />
          </div>
        </Modal>
      </div>
      <button className='botao' onClick={handlerClick}>{t('login.loginButton')}</button>
    </LoginForm >
  )
}

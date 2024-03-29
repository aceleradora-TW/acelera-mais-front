import { t } from 'i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import PrimaryButton from '../../../../components/buttons/primary'
import { Card } from '../../../../components/card'
import { InputEmail } from '../../../../components/inputs/email'
import { InputTelephone } from '../../../../components/inputs/telephone'
import { InputText } from '../../../../components/inputs/text'
import { InputPassword } from '../../../../components/inputs/password'
import { Warning, MessageErrorPassword } from './styled'
import { useState } from 'react'
import { client } from '../../../../service'
import { useParams, useNavigate } from 'react-router-dom'

export const UseMessageRegisterError = () => {
  return (
    <Warning>
      <h1><FontAwesomeIcon icon={faBan} />{t('UseMessageRegisterError.Error')}</h1>
      <p>{t('UseMessageRegisterError.expiredLink')}</p>
      <p>{t('UseMessageRegisterError.requestLink')}</p>
    </Warning>
  )
}

export const Register = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [isValidPassword, setValidyPassword] = useState(false)

  const [mentor, setMentor] = useState({
    name: '',
    email: '',
    telephone: '',
    password: '',
    repeatPassword: ''
  })

  const handlerClick = () => {
    if (!isRequired()) {
      alert(t('mentorRegistration.messageRequired'))
      return
    }

    const { token } = params

    client.post('/user', mentor, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => {
        alert(t('mentorRegistration.messageSuccess'))
        navigate('/')
      })
      .catch(error => {
        alert(error.response.data.msg)
      })
  }

  const isRequired = () => {
    const verify = Object.entries(mentor).every(element => {
      return !!element[1]
    })
    return verify && mentor.password === mentor.repeatPassword
  }

  const handleChange = (element) => {
    const { name, value } = element.target
    setMentor({ ...mentor, [name]: value })

    if (name === 'repeatPassword' || name === 'password') {
      setValidyPassword(handleChangePassword(value, name))
    }
  }

  const handleChangePassword = (value, name) => {
    if (name === 'password') {
      return mentor.repeatPassword !== value
    }
    return mentor.password !== value
  }

  return (
    <>
      <Card title={t('mentorRegistration.title')}>
        <InputText name='name' label={t('mentorRegistration.name')}
          placeholder={t('')} onChange={handleChange} />
        <InputTelephone name='telephone' label={t('mentorRegistration.telephone')} onChange={handleChange} />
        <InputEmail name='email' label={t('mentorRegistration.email')} onChange={handleChange} />
        <InputPassword name='password' label={t('mentorRegistration.password')} onChange={handleChange} />
        <InputPassword name='repeatPassword' label={t('mentorRegistration.repeatPassword')} onChange={handleChange} />
        {isValidPassword && <MessageErrorPassword>{t('inputPassword.message.invalidPassword')}</MessageErrorPassword>}
        <PrimaryButton text={t('mentorRegistration.registerButton')} onClick={handlerClick} />
      </Card>
    </>
  )
}

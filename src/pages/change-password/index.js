import PrimaryButton from '../../components/buttons/primary'
import { InputPassword } from '../../components/inputs/password'
import { useState } from 'react'
import { client } from '../../service'
import { t } from 'i18next'
import { useNavigate } from 'react-router'
import {
  ContainerUserChangePasswordPage,
  HeaderTitle,
  ModalBody,
  Content,
  Header,
  MessageError
} from './styled'

export const UserChangePasswordPage = () => {
  const [data] = useState({ password: '', newPassword: '' })
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleChange = ({ target }) => {
    const { value, name } = target
    data[name] = value
  }

  const handlerClick = async (event) => {
    const { password, newPassword } = data
    event.preventDefault()
    const id = window.location.pathname.split('/').pop()
    if (password && newPassword && password === newPassword) {
      const user = {
        password
      }
      await client.put(`/user/${id}`, user)
        .then(res => {
          alert(res.data.message)
          navigate('/')
          return res
        }).catch(err => console.log(err))

      return true
    }

    setMessage(t('reset.messageError'))
  }

  return (
    <ContainerUserChangePasswordPage>
      <Content>
        <Header>
          <HeaderTitle>{t('resetPassword.title')}</HeaderTitle>
        </Header>
        <ModalBody>
          <InputPassword
            onChange={handleChange}
            name="password"
            value={data.password}
            label={t('resetPassword.password')} />

          <InputPassword
            onChange={handleChange}
            name="newPassword"
            value={data.newPassword}
            label={t('resetPassword.newPassword')} />

          <MessageError>{message}</MessageError>
          <PrimaryButton
            text={t('resetPassword.buttonSave')}
            onClick={handlerClick}
          />
        </ModalBody>
      </Content>
    </ContainerUserChangePasswordPage>

  )
}

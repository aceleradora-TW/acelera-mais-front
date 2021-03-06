import {
  ContainerUserChangePasswordPage,
  HeaderTitle,
  ModalBody,
  Content,
  Header,
  MessageError
} from './styled'
import PrimaryButton from '../../components/buttons/primary'
import { InputPassword } from '../../components/inputs/password'
import { useState } from 'react'
import { client } from '../../service'
import { t } from 'i18next'
import { useNavigate } from 'react-router'

export const UserChangePasswordPage = () => {
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleChangePassword = ({ target }) => {
    setPassword(target.value)
  }
  const handleChangeNewPassword = ({ target }) => {
    setNewPassword(target.value)
  }

  const handlerClick = async (event) => {
    event.preventDefault()
    const id = window.location.pathname.split('/').pop()
    if (password === newPassword && password && newPassword) {
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
          <InputPassword onChange={handleChangePassword} value={password} label={t('resetPassword.password')} />
          <InputPassword onChange={handleChangeNewPassword} value={newPassword} label={t('resetPassword.newPassword')} />
          <MessageError>{message}</MessageError>
          <PrimaryButton text={t('resetPassword.buttonSave')} onClick={handlerClick}></PrimaryButton>
        </ModalBody>
      </Content>
    </ContainerUserChangePasswordPage>

  )
}

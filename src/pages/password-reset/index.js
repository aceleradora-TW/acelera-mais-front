import {
  ContainerReset,
  HeaderTitle,
  ModalBody,
  Content,
  Header,
  MessageError
} from './styled'
import PrimaryButton from '../../components/buttons/primary'
import { InputPassword } from '../../components/inputs/password'
import { useState } from 'react'

export const Reset = () => {
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleChangePassword = ({ target }) => {
    setPassword(target.value)
  }
  const handleChangeNewPassword = ({ target }) => {
    setNewPassword(target.value)
  }

  const handlerClick = async (event) => {
    event.preventDefault()
    if (password === newPassword && password && newPassword) {
      return true
    }
    setMessage('As senhas estão diferentes')
  }

  return (
    <ContainerReset>
      <Content>
        <Header>
          <HeaderTitle>Redefina sua Senha</HeaderTitle>
        </Header>
        <ModalBody>
          <InputPassword onChange={handleChangePassword} label="Insira sua nova senha" />
          <InputPassword onChange={handleChangeNewPassword} label="Repita a senha" />
          <MessageError>{message}</MessageError>
          <PrimaryButton text="Salvar" onClick={handlerClick}></PrimaryButton>
        </ModalBody>
      </Content>
    </ContainerReset>

  )
}

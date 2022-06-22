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
import { client } from '../../service'

export const Reset = ({ method = 'PUT', id = '' }) => {
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [message, setMessage] = useState('')
  const [flag, setFlag] = useState('')

  const handleChangePassword = ({ target }) => {
    setPassword(target.value)
  }
  const handleChangeNewPassword = ({ target }) => {
    setNewPassword(target.value)
  }

  const handlerClick = async (event) => {
    event.preventDefault()

    if (password === newPassword && password && newPassword) {
      setFlag('user-enabled')
      const user = {
        password, flag
      }

      try {
        await client.put(`/user/${id}`, user)
          .then(res => {
            window.location.replace = 'http://localhost:3000/user'
          })
        // const { data: { } }
      } catch {
        console.log()
      }

      return true
    }

    setMessage('As senhas estão diferentes ou em branco')
  }

  return (
    <ContainerReset>
      <Content>
        <Header>
          <HeaderTitle>Redefina sua Senha</HeaderTitle>
        </Header>
        <ModalBody>
          <InputPassword onChange={handleChangePassword} value={password} label="Insira sua nova senha" />
          <InputPassword onChange={handleChangeNewPassword} value={newPassword} label="Repita a senha" />
          <MessageError>{message}</MessageError>
          <PrimaryButton text="Salvar" onClick={handlerClick}></PrimaryButton>
        </ModalBody>
      </Content>
    </ContainerReset>

  )
}

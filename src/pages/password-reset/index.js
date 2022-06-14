import {
  ContainerReset,
  HeaderTitle,
  ModalBody,
  Content,
  Header
} from './styled'
import PrimaryButton from '../../components/buttons/primary'
import { InputPassword } from '../../components/inputs/password'

export const Reset = () => {
  return (
    <ContainerReset>
      <Content>
        <Header>
          <HeaderTitle>Redefina sua Senha</HeaderTitle>
        </Header>
        <ModalBody>
          <InputPassword label="Insira sua senha" />
          <InputPassword label="Repita a senha" />
          <PrimaryButton text="Salvar" onClick />
        </ModalBody>
      </Content>
    </ContainerReset>

  )
}

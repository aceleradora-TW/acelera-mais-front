// import { ContainerReset, Section } from './styled'
import {
  Title,
  Header,
  Container,
  Content,
  ModalBody,
  Footer
} from './../../components/modal/style'
import PrimaryButton from '../../components/buttons/primary'
export const Reset = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Title>Redefina sua Senha</Title>
        </Header>
        <ModalBody>
          <div>
            <label>Insira a nova senha</label>
            <input type="password" />
          </div>
          <div>
            <label>Repita a senha</label>
            < input type="password" />
          </div>
          <PrimaryButton text="Salvar" onClick />
        </ModalBody>
        <Footer></Footer>
      </Content>
    </Container>

  )
}

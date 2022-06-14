import {
  ContainerReset,
  HeaderTitle,
  Section,
  ChangePassword,
  ModalBody
} from './styled'
import { Header, Content, Footer } from './../../components/modal/style'
import PrimaryButton from '../../components/buttons/primary'
export const Reset = () => {
  return (
    <ContainerReset>
      <Content>
        <Header>
          <HeaderTitle>Redefina sua Senha</HeaderTitle>
        </Header>
        <ModalBody>
          <Section>
            <label>Insira a nova senha</label>
            <ChangePassword>
              <input type="password" />
            </ChangePassword>
          </Section>
          <Section>
            <label>Repita a senha</label>
            <div className='senha'>
              < input type="password" />
            </div>
          </Section>
          <PrimaryButton text="Salvar" onClick />
        </ModalBody>
        <Footer></Footer>
      </Content>
    </ContainerReset>

  )
}

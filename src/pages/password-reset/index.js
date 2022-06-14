import {
  ContainerReset,
  HeaderTitle,
  Section,
  ModalBody,
  Content
} from './styled'
import { Header, Footer } from './../../components/modal/style'
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
            <div>
              <input type="password" />
              </div>
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

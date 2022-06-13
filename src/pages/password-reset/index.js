import { ContainerReset, Content, Header, Section } from './styled'
import PrimaryButton from '../../components/buttons/primary'
export const Reset = () => {
  return (
    <ContainerReset>
      <Content>
        <Header> Redefina sua Senha </Header>
        <Section>
          <div className='senha'>
            <label>insira nova senha</label>
            < input type="password" />
          </div>
          <div className='nova'>
        <label>repita sua nova senha</label>
        < input type="password"/>
      </div>
          <PrimaryButton text="salvar" onClick />
        </Section>

      </Content>

    </ContainerReset>
  )
}

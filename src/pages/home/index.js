import PrimaryButton from '../../components/buttons/primary'
import { ContainerButtons, HomePageContainer } from './styled'

export const HomePage = () => {
  const handleSubmit = () => {
    location.reload()
  }

  return (
    <HomePageContainer>
      <h1>Home page</h1>
      <ContainerButtons>
        <PrimaryButton class='botao1' text={'Selective process'} onClick={handleSubmit} />
        <br></br>
        <PrimaryButton text={'Registration of mentors'} onClick={handleSubmit} />
        <br></br>
        <PrimaryButton text={'reset your password'} onClick={handleSubmit} />
      </ContainerButtons>
    </HomePageContainer>

  )
}

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
        <PrimaryButton text={'Selective process'} onClick={handleSubmit} />
        <PrimaryButton text={'Registration of mentors'} onClick={handleSubmit} />
        <PrimaryButton text={'reset your password'} onClick={handleSubmit} />
      </ContainerButtons>
    </HomePageContainer>

  )
}

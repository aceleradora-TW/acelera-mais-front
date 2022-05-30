import PrimaryButton from '../../components/buttons/primary'
import { Link } from 'react-router-dom'
import { ContainerButtons, HomePageButton, HomePageContainer } from './styled'

export const HomePage = () => {
  const handleSubmit = () => {
    location.reload()
  }

  return (
    <HomePageContainer>
      <h1>Home page</h1>

      <Link className="btn primary" to="/hiring-process">processo seletivo</Link>
      <PrimaryButton class={HomePageButton} text={'Selective process'} onClick={handleSubmit} />
      <PrimaryButton class={HomePageButton} text={'Registration of mentors'} onClick={handleSubmit} />
      <PrimaryButton class={HomePageButton} text={'reset your password'} onClick={handleSubmit} />

    </HomePageContainer>

  )
}

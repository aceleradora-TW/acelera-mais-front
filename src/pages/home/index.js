import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { HomePageContainer, HomeContainer } from './styled'

export const HomePage = () => {
  return (
    <HomePageContainer>
      <h1>Página inicial</h1>
      <HomeContainer>
        <Link to="/hiring-process">Processo Seletivo
          <FontAwesomeIcon icon={faChevronCircleRight}/>
        </Link>

        <Link to="/manage-Mentors">Gerenciamento Mentores
        <FontAwesomeIcon icon={faChevronCircleRight}/>
        </Link>
        <Link to="/reset password">Resetar Senha
        <FontAwesomeIcon icon={faChevronCircleRight}/>
        </Link>
      </HomeContainer>

    </HomePageContainer>
  )
}

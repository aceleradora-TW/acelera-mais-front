import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { HomePageContainer, HomeContainer } from './styled'

export const HomePage = () => {
  const { t } = useTranslation()
  return (
    <HomePageContainer>
      <h1>{t('home.title')}</h1>
      <HomeContainer>
        <Link to="/hiring-process">{t('hiringProcess.title')}
          < FontAwesomeIcon icon={faChevronCircleRight}/>
        </Link>
        <Link to="/user">{t('home.manageMentor')}
        <FontAwesomeIcon icon={faChevronCircleRight}/>
        </Link>
      </HomeContainer>
    </HomePageContainer>
  )
}

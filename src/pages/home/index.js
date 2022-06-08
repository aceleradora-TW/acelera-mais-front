import { useTranslation } from 'react-i18next'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { HomePageContainer, HomeContainer } from './styled'
import { Links } from '../../components/Links'

export const HomePage = () => {
  const { t } = useTranslation()
  return (
    <HomePageContainer>
      <h1>{t('home.title')}</h1>
      <HomeContainer>
        <Links link="/hiring-process" label={t('hiringProcess.title')} icon={faChevronCircleRight} />
        <Links link="/user" label={t('home.manageMentor')} icon={faChevronCircleRight} />
      </HomeContainer>
    </HomePageContainer>
  )
}

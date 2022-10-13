import { useTranslation } from 'react-i18next'
import { faChevronCircleRight, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { HomePageContainer, HomeContainer } from './styled'
import { Hyperlink } from '../../components/hyperlink'
import { isAdmin } from '../../utils/isAdmin'
import { ButtonComponent } from '../../components/buttons/button/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HomePage = () => {
  const { t } = useTranslation()
  return (
    <HomePageContainer>
      <header>
        <ButtonComponent><FontAwesomeIcon icon={faDoorOpen} /></ButtonComponent>
      </header>
      <h1>{t('home.title')}</h1>
      <HomeContainer>
        <Hyperlink link="/hiring-process" label={t('hiringProcess.title')} icon={faChevronCircleRight} />
        {isAdmin() &&
          <Hyperlink link="/user" label={t('home.manageMentor')} icon={faChevronCircleRight} />}
      </HomeContainer>
    </HomePageContainer>
  )
}

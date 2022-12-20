// import { useTranslation } from 'react-i18next'
import { PageNotFoundContainer } from './styled'
import PrimaryButton from '../../components/buttons/primary'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import notFoundImage from './404-300px.svg'

const PageNotFound = () => {
  const { t } = useTranslation()
  return (
    <PageNotFoundContainer>
      <div>
        <h1>{t('page404.h1')}</h1>
        <p>{t('page404.warning')}</p>
        <Link to={'/home'}>
        <PrimaryButton text={t('page404.back')} />
        </Link>
      </div>
      <div>
        <img src={notFoundImage} />
      </div>
    </PageNotFoundContainer>
  )
}

export default PageNotFound

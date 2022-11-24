import { t } from 'i18next'
import { LoadingContainer } from './styled'

export const Loading = ({ isVisible = true }) => {
  return (
    <>
      {isVisible &&
        <LoadingContainer>
          <h2>{t('mentorRegistration.messageLoading')}...</h2>
          <progress></progress>
        </LoadingContainer>}
    </>
  )
}

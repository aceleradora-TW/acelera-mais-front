import { t } from 'i18next'

export const Loading = ({ isVisible = true }) => {
  return (
    <>
      {isVisible &&
        <Loading>
          <h2>{t('mentorRegistration.messageLoading')}...</h2>
          <progress></progress>
        </Loading>}
    </>
  )
}

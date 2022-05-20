import { useTranslation } from 'react-i18next'
import Button from '../../components/buttons/button'
import showFeature from '../../utils/feature-toggle'
const MentorRegistrationPage = () => {
  const { t } = useTranslation
  const handleSubmit = 0
  return (
    <div className="page-container">
      <section>
        <h1>{t('mentorregistration.title')}</h1>
        {showFeature()
          ? (<div>
            <Button classe="button-filter" text={t('hiringProcess.filter.all')} onClick={handleSubmit} />
            </div>)
            : null}
      </section>
    </div>
  )
}

export default MentorRegistrationPage
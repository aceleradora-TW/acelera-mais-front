import { useTranslation } from 'react-i18next'
import Button from '../../components/buttons/button'

const MentorRegistrationPage = () => {
  const { t } = useTranslation()
  const handleSubmit = 0
  return (
    <div className="page-container">
      <section>
        <h1>{t('lista de mentoras avaliadoras')}</h1>
            <div>
              <Button text={t('cadastrar nova mentora')} onClick={handleSubmit} />
            </div>
       </section>
    </div>
  )
}

export default MentorRegistrationPage

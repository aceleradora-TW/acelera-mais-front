import { useTranslation } from 'react-i18next'
import PrimaryButton from '../../components/buttons/primary'
import { InputSearch } from '../../components/inputs/search'

import './style.css'

export const MentorRegistrationPage = () => {
  const { t } = useTranslation() // não ta funciondo
  const handleSubmit = 0 // chamada do componente que o Erick e a Let tão fazendo
  const pageHome = 0 // aguardando page home ser criada
  return (
    <div className='header'>
      <section>
        <h1>{t('user.title')}</h1>
         <div>
         <InputSearch/>
         </div>
          <PrimaryButton text={t('Cadastrar nova mentora')} onClick={handleSubmit} />
          <PrimaryButton text={t('user.backButton')} onClick={pageHome} />
      </section>
    </div>
  )
}
export default MentorRegistrationPage

import { InputText } from '../../components/inputs/text'
import { useTranslation } from 'react-i18next'
import { Container } from './styled.js'

export const EditInfoMentor = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <h1>{t('popupTitle.name')}</h1>
      <form>
        <InputText name="name" label={t('descriptionForm.name')}/>
        <InputText name="telephone" label={t('descriptionForm.telephone')}/>
        <InputText name="email" label={t('descriptionForm.email')}/>
      </form>
    </Container>
  )
}
export default EditInfoMentor

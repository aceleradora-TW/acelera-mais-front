import { InputText } from '../../components/inputs/text'
import { useTranslation } from 'react-i18next'
import { Container } from './styled'
export const EditInfoMentor = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <h1>Editar dados da mentora</h1>
      <form>
        <InputText name="name" label={t('edit.name')}/>
        <InputText name="telephone" label="telepone"/>
        <InputText name="email" label="email"/>
      </form>
    </Container>
  )
}
export default EditInfoMentor

import { useTranslation } from 'react-i18next'
import { InputText } from '../../../../components/inputs/text'
import PrimaryButton from '../../../../components/buttons/primary'
import { Container, PopUp, Title } from '../../styled'
export const UserForm = () => {
  const { t } = useTranslation()
  return (
   <Container>
      <PopUp>
        <Title>
            <h1>Editar dados da mentora </h1>
         </Title>
          <form>
          <InputText name="name" label={t('hiringProcess.form.name')} />
          <InputText name="description" label={t('hiringProcess.form.description')} />
          <PrimaryButton text={t('hiringProcess.form.submitButton')} >
                Salvar
          </ PrimaryButton>
        </form>
     </PopUp>
    </Container>
  )
}

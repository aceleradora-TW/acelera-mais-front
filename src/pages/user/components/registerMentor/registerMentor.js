import { t } from 'i18next'
import PrimaryButton from '../../../../components/buttons/primary'
import { Card } from '../../../../components/card'
import { InputEmail } from '../../../../components/inputs/email'
import { InputTelephone } from '../../../../components/inputs/telephone'
import { InputText } from '../../../../components/inputs/text'

export const Register = () => {
  return (
    <>
      <Card title='Cadastro de Mentor Avaliadora'>
        <InputText name='name' label={t('mentorRegistration.name')} />
        <InputTelephone name='telephone' label={t('mentorRegistration.telephone')} />
        <InputEmail name='email' label={t('mentorRegistration.email')} />
        <InputEmail name='password' label={t('mentorRegistration.password')} />
        <InputEmail name='password' label={t('mentorRegistration.repeatPassword')} />
        <PrimaryButton text={t('mentorRegistration.registerButton')} />
      </Card>
    </>
  )
}

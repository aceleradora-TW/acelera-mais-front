import { t } from 'i18next'
import PrimaryButton from '../../../../components/buttons/primary'
import { Card } from '../../../../components/card'
import { InputEmail } from '../../../../components/inputs/email'
import { InputTelephone } from '../../../../components/inputs/telephone'
import { InputText } from '../../../../components/inputs/text'
import { InputPassword } from '../../../../components/inputs/password'
import { Warning } from './styled'

export const UseMessageRegisterError = () => {
  return (
    <Warning>
      <h1>{t('UseMessageRegisterError.Error')}</h1>
      <p>{t('UseMessageRegisterError.expiredLink')}</p>
      <p>{t('UseMessageRegisterError.requestLink')}</p>
    </Warning>
  )
}

export const Register = () => {
  return (
    <>
      <Card title={t('mentorRegistration.title')}>
        <InputText name='name' label={t('mentorRegistration.name')} placeholder={t('')}/>
        <InputTelephone name='telephone' label={t('mentorRegistration.telephone')} />
        <InputEmail name='email' label={t('mentorRegistration.email')} />
        <InputPassword name='password' label={t('mentorRegistration.password')} />
        <InputPassword name='password' label={t('mentorRegistration.repeatPassword')} />
        <PrimaryButton text={t('mentorRegistration.registerButton')} />
      </Card>
    </>
  )
}

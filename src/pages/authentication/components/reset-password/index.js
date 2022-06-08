/* import { useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons' */
import { Modal } from '../../../../components/modal'
import { InputEmail } from '../../../../components/inputs/email'
import PrimaryButton from '../../../../components/buttons/primary'
import { useTranslation } from 'react-i18next'

export const ResetPassword = ({ method = 'POST', callback = () => { } }) => {
  const { t } = useTranslation()
  /* const [email, setEmail] = useState({
    email: ''
  }) */

  const handleChange = () => { }
  const sendUsers = () => { }

  return (
    <Modal
      classe='button primary'
      text={t('login.resetPassword.text')}
    >
      <InputEmail name='email' label={t('login.resetPassword.email')} onChange={handleChange} />
      <PrimaryButton text={t('mentorRegistration.registerButton')} onClick={sendUsers} />
    </Modal>
  )
}

import { client } from '../../../../service'
import { useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Modal } from '../../../../components/modal'
import { InputText } from '../../../../components/inputs/text'
import PrimaryButton from '../../../../components/buttons/primary'
import { InputEmail } from '../../../../components/inputs/email'
import { InputTelephone } from '../../../../components/inputs/telephone'
import { useTranslation } from 'react-i18next'
import { t } from 'i18next'

export const RegisterModal = ({ method = 'POST', callback = () => { } }) => {
  const [users, setUsers] = useState({
    name: '',
    telephone: '',
    email: '',
    type: 'mentor',
    password: '',
    flag: 'first-login'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUsers({ ...users, [name]: value })
  }

  const sendUsers = () => {
    const { t } = useTranslation()
    const data = users

    client('/user', { method, data })
      .then(res => {
        alert(t(res.data.message))
        callback(res.data)
      })
  }

  return (
    <div>
      <Modal
        icon={faPlus}
        label='Importar'
        title='Cadastrar nova mentora'
        classe='button primary'
        text='Cadastrar uma nova mentora'
      >
        <InputText name='name' label={t('mentorRegistration.name')} onChange={handleChange} />
        <InputTelephone name='telephone' label={'Telefone'} onChange={handleChange} />
        <InputEmail name='email' label={'Email'} onChange={handleChange} />
        <PrimaryButton text={t('mentorRegistration.registerButton')} onClick={sendUsers} />
      </Modal>

    </div>
  )
}

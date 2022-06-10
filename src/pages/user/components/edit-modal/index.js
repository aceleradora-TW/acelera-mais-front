import { client } from '../../../../service'
import { useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Modal } from '../../../../components/modal'
import { InputText } from '../../../../components/inputs/text'
import PrimaryButton from '../../../../components/buttons/primary'
import { InputEmail } from '../../../../components/inputs/email'
import { InputTelephone } from '../../../../components/inputs/telephone'
import { useTranslation } from 'react-i18next'

export const EditModal = ({ method = 'PUT', id = '', callback = () => { } }) => {
  const { t } = useTranslation()
  const [users, setUsers] = useState({
    name: '',
    telephone: '',
    email: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUsers({ ...users, [name]: value })
  }

  const sendUsers = () => {
    const data = users

    client(`/user/${id}`, { method, data })
      .then(res => {
        alert(res.data.message)
        callback(res.data)
      })
  }

  return (
    <div>
      <Modal
        icon={faPlus}
        label='Importar'
        title={t('mentorRegistration.title')}
        classe='button primary'
        text={t('mentorRegistration.text')}
      >
        <InputText name='name' label={t('mentorRegistration.name')} onChange={handleChange} />
        <InputTelephone name='telephone' label={t('mentorRegistration.telephone')} onChange={handleChange} />
        <InputEmail name='email' label={t('mentorRegistration.email')} onChange={handleChange} />
        <PrimaryButton text={t('mentorRegistration.registerButton')} onClick={sendUsers} />
      </Modal>

    </div>
  )
}

import { client } from '../../../../service'
import { useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Modal } from '../../../../components/modal'
import { InputText } from '../../../../components/inputs/text'
import PrimaryButton from '../../../../components/buttons/primary'
import { InputEmail } from '../../../../components/inputs/email'
import { InputTelephone } from '../../../../components/inputs/telephone'
import { useTranslation } from 'react-i18next'

export const EditModal = ({ method = 'POST', id = '', callback = () => { } }) => {
  const { t } = useTranslation()
  const [users, getUsers] = useState({
    name: '',
    telephone: '',
    email: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    getUsers({ ...users, [name]: value })
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
        title={t('editModal.title')}
        classe='button primary'
        // text={t('mentorRegistration.text')}
      >
        <InputText name='name' label={t('editModal.name')} onChange={handleChange} />
        <InputTelephone name='telephone' label={t('editModal.telephone')} onChange={handleChange} />
        <InputEmail name='email' label={t('editModal.email')} onChange={handleChange} />
        <PrimaryButton text={t('editModal.save')} onClick={sendUsers} />
      </Modal>

    </div>
  )
}
export default EditModal

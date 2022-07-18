import { useState } from 'react'
import { InputEmail } from '../../../../components/inputs/email'
import { InputTelephone } from '../../../../components/inputs/telephone'
import { InputText } from '../../../../components/inputs/text'
import { client } from '../../../../service'
import PrimaryButton from '../../../../components/buttons/primary'
import { useTranslation } from 'react-i18next'
export const UserForm = ({ method = 'POST', id = '', callback = () => { } }) => {
  const { t } = useTranslation()

  const [users, getUsers] = useState({
    name: '',
    telephone: '',
    email: '',
    type: 'mentor'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    getUsers({ ...users, [name]: value })
  }

  const sendUsers = (e) => {
    e.preventDefault()
    const data = users

    client(`/user/${id}`, { method, data })
      .then(res => res.data)
      .then(res => {
        alert(res.message)
        document.location.reload(true)
        callback(res)
      }).catch(
        ({ response }) => alert(response.data.msg)
      )
  }

  return (
    <form>
      <InputText name='name' label={t('mentorRegistration.name')} onChange={handleChange} />
      <InputTelephone name='telephone' label={t('mentorRegistration.telephone')} onChange={handleChange} />
      <InputEmail name='email' label={t('mentorRegistration.email')} onChange={handleChange} />
      <PrimaryButton text={t('editMentor.save')} onClick={sendUsers} />
    </form>
  )
}

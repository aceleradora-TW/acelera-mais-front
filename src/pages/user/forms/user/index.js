import { useState } from 'react'
import { InputEmail } from '../../../../components/inputs/email'
import { InputTelephone } from '../../../../components/inputs/telephone'
import { InputText } from '../../../../components/inputs/text'
import Select from '../../../../components/select'
import { client } from '../../../../service'
import PrimaryButton from '../../../../components/buttons/primary'
import { useTranslation } from 'react-i18next'
export const UserForm = ({ user = { name: '', telephone: '', email: '', type: '' }, method = 'POST', id = '', callback = () => { } }) => {
  const { t } = useTranslation()

  const [users, getUsers] = useState({
    name: user.name,
    telephone: user.telephone,
    email: user.email,
    type: user.type
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

  const options = [
    { label: t('mentorRegistration.administrator'), value: 'admin' },
    { label: t('mentorRegistration.mentor'), value: 'mentor' }
  ]

  return (
    <form>
      <InputText value={users.name} name='name' label={t('mentorRegistration.name')} onChange={handleChange} />
      <Select
        value={users.type}
        name="type"
        onChange={handleChange}
        label={t('mentorRegistration.type')}
        placeholder={t('mentorRegistration.placeHolder')}
        options={options}
      />
      <InputTelephone value={users.telephone} name='telephone' label={t('mentorRegistration.telephone')} onChange={handleChange} />
      <InputEmail value={users.email} name='email' label={t('mentorRegistration.email')} onChange={handleChange} />

      <PrimaryButton text={t('editMentor.save')} onClick={sendUsers} />
    </form>
  )
}

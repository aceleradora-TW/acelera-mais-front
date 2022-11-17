import { useState } from 'react'
import { InputDate } from '../../../../components/inputs/date'
import { InputText } from '../../../../components/inputs/text'
import { client } from '../../../../service'
import PrimaryButton from '../../../../components/buttons/primary'
import { useTranslation } from 'react-i18next'

export const HiringProcessForm = ({ method = 'POST', id = '', callback = () => { } }) => {
  const { t } = useTranslation()

  const [hiringProcess, setHiringProcess] = useState({
    name: '',
    startDate: '',
    endDate: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setHiringProcess({
      ...hiringProcess,
      [name]: value
    })
  }

  const sendHiringProcess = () => {
    const data = hiringProcess

    data.startDate < data.endDate
      ? client(`/hiring_process/${id}`,
        {
          method,
          data
        })
        .then(res => {
          console.log(res.data)
          callback(res.data)
        })
      : alert('Data inválida')
  }

  return (
    <form>
      <InputText name="name" label={t('hiringProcess.form.name')} onChange={handleChange} />
      <InputDate name="startDate" label={t('hiringProcess.form.startDate')} onChange={handleChange} />
      <InputDate name="endDate" label={t('hiringProcess.form.endDate')} onChange={handleChange} />
      <InputText name="description" label={t('hiringProcess.form.description')} onChange={handleChange} />
      <PrimaryButton text={t('hiringProcess.form.submitButton')} onClick={sendHiringProcess}>
        Enviar
      </PrimaryButton>
    </form>
  )
}

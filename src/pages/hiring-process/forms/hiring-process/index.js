import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useState } from 'react'
import { InputText } from '../../../../components/inputs/text'
import { client } from '../../../../service'
import PrimaryButton from '../../../../components/buttons/primary'
import { useTranslation } from 'react-i18next'
import { DateRange } from 'react-date-range'

export const HiringProcessForm = ({
  method = 'POST',
  id = '',
  callback = () => { },
  process = {
    name: '',
    startDate: '',
    endDate: '',
    description: ''
  }
}) => {
  const { t } = useTranslation()
  const [datePicker, setDatePicker] = useState([
    process
      ? {
          startDate: new Date(Date.parse(process.startDate)),
          endDate: new Date(Date.parse(process.endDate)),
          key: 'selection'
        }
      : {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }])

  const [hiringProcess, setHiringProcess] = useState(process)

  const handleChange = (e) => {
    const { name, value } = e.target
    setHiringProcess({
      ...hiringProcess,
      [name]: value
    })
  }

  const sendHiringProcess = () => {
    client(`/hiring_process/${id}`,
      {
        method,
        data: hiringProcess
      })
      .then(res => {
        callback(res.data)
      })
      .catch(err => { alert(t('hiringProcess.form.error.message', err)) })
  }

  return (
    <form>
      <InputText name="name" value={hiringProcess.name} label={t('hiringProcess.form.name')} onChange={handleChange} />
      <DateRange
        name={'startDate'}
        ranges={datePicker}
        editableDateInputs={true}
        minDate={new Date()}
        preview={{ startDate: new Date(Date(datePicker.startDate)), endDate: new Date(Date(datePicker.endDate)) }}
        onChange={(item) => {
          setDatePicker([item.selection])
          setHiringProcess({
            ...hiringProcess,
            startDate: item.selection.startDate,
            endDate: item.selection.endDate
          })
        }
        }
        moveRangeOnFirstSelection={false}
      />
      <InputText name="description" value={hiringProcess.description} label={t('hiringProcess.form.description')} onChange={handleChange} />
      <PrimaryButton text={t('hiringProcess.form.submitButton')} onClick={sendHiringProcess}>
        Enviar
      </PrimaryButton>
    </form>
  )
}

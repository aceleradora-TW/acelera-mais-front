import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useState } from 'react'
// import { InputDate } from '../../../../components/inputs/date'
import { InputText } from '../../../../components/inputs/text'
import { client } from '../../../../service'
import PrimaryButton from '../../../../components/buttons/primary'
import { useTranslation } from 'react-i18next'
import { DateRange } from 'react-date-range'

export const HiringProcessForm = ({ method = 'POST', id = '', callback = () => { } }) => {
  const { t } = useTranslation()

  const [datePicker, setDatePicker] = useState([{
    startDate: new Date(),
    endDate: null,
    key: 'selection'
  }])

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
      <InputText name="name" label={t('hiringProcess.form.name')} onChange={handleChange} />
      <DateRange
        name={'startDate'}
        ranges={datePicker}
        editableDateInputs={true}
        minDate={new Date()}
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
      <InputText name="description" label={t('hiringProcess.form.description')} onChange={handleChange} />
      <PrimaryButton text={t('hiringProcess.form.submitButton')} onClick={sendHiringProcess}>
        Enviar
      </PrimaryButton>
    </form>
  )
}

import { useState } from 'react'
import { InputDate } from '../../../../components/inputs/date'
import { InputText } from '../../../../components/inputs/text'
import { client } from '../../../../service'
import PrimaryButton from '../../../../components/buttons/primary'

export const HiringProcessForm = ({ method = 'POST', id = '', callback = () => { } }) => {
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

    client(`/hiring_process/${id}`,

      {
        method,
        data
      })
      .then(res => {
        console.log(res.data)
        callback(res.data)
      })
  }

  return (
    <form>
      <InputText name="name" label="Nome" onChange={handleChange} />
      <InputDate name="startDate" label="Data de início" onChange={handleChange} />
      <InputDate name="endDate" label="Data de término" onChange={handleChange} />
      <InputText name="description" label="Descrição" onChange={handleChange} />
<<<<<<< HEAD
      <Button classe='button submit' type="button" text='Enviar' onClick={sendHiringProcess}>
=======
      <PrimaryButton text='Enviar' onClick={sendHiringProcess}>
>>>>>>> b51fa9b3eb1061fdc346b416f80c046dea6bf03e
        Enviar
      </PrimaryButton>
    </form>
  )
}

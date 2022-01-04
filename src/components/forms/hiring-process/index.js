import { useState } from 'react'
import { InputDate } from '../../inputs/date'
import { InputText } from '../../inputs/text'
import { client } from '../../../service'
import Button from '../../buttons/button'

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
      <Button classe='button-submit' type="button" text='Enviar' onClick={sendHiringProcess}>
        Enviar
      </Button>
    </form>
  )
}

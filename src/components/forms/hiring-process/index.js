import { useState } from 'react'
import { InputDate } from '../../inputs/date'
import { InputText } from '../../inputs/text'
import Button from '../../button'
import axios from 'axios'

// eslint-disable-next-line react/prop-types
export const HiringProcessForm = ({ method = 'POST', id = '' }) => {
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

    axios(`https://test-acelera-mais-api.herokuapp.com/hiring_process/${id}`,
      {
        method,
        data
      })
      .then(res => console.log(res.data))
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

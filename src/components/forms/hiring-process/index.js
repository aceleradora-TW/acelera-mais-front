import { useState } from 'react'
import { InputDate } from '../../inputs/date'
import { InputText } from '../../inputs/text'
import axios from 'axios'

// eslint-disable-next-line react/prop-types
export const HiringProcessForm = ({ method, id = '' }) => {
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

    axios('https://prod-acelera-mais-api.herokuapp.com/hiring-process',
      {
        method,
        data
      })
      .then(res => console.log(res.data))
  }

  return (
    <form>
      <InputText name="name" label="Nome" onChange={handleChange} />
      <InputDate name="startDate" label="Data de Início" onChange={handleChange} />
      <InputDate name="endDate" label="Data de Término" onChange={handleChange} />
      <InputText name="description" label="Descrição" onChange={handleChange} />
      <button type="button" onClick={sendHiringProcess}>
        enviar
      </button>
    </form>
  )
}

<<<<<<< HEAD:src/components/forms/hiring-process/index.js
import { InputDate } from '../../inputs/date'
import { InputText } from '../../inputs/text'

export const HiringProcess = () => {
=======
import { useState } from 'react'
import { InputDate } from '../inputs/date'
import { InputText } from '../inputs/text'

export const HiringProcessForm = () => {
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
    console.log(hiringProcess)
  }

>>>>>>> 32ed959675ead7f00482e7e02a3079b3baf08320:src/components/hiring-process-form/index.js
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

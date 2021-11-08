import Button from '../../components/button'
import { Modal } from '../../components/modal'
import { HiringProcessForm } from '../../components/forms/hiring-process'
import { ProcessList } from '../../components/hiring-process-list'
import './style.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const axios = require('axios')

const HiringProcessPage = () => {
  const [hiringProcesses, setHiringProcesses] = useState([])

  useEffect(async () => {
    const response = await axios.get('https://test-acelera-mais-api.herokuapp.com/hiring_process')
    setHiringProcesses(response.data)
  }, [])

  const handleSubmit = () => {
  }

  return (
    <div className="hiring-page">
      <h1>Processos seletivos</h1>
      <section>
        <div>
          <Button classe={'button-filter'} text="Todos" onClick={handleSubmit} />
          <Button classe={'button-filter'} text="Abertos" onClick={handleSubmit} />
          <Button classe={'button-filter'} text="Fechados" onClick={handleSubmit} />
        </div>
        <Modal icon={faPlus} classe={'button-new-process'} text="Novo processo" title="Criar novo processo" onClick={handleSubmit}>
          <HiringProcessForm />
        </Modal>
      </section>
      <ProcessList processes={hiringProcesses} />
    </div>
  )
}

export default HiringProcessPage

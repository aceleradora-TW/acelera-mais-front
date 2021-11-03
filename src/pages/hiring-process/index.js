import Button from '../../components/button'
import { ProcessList } from '../../components/hiring-process-list'
import './style.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faPlus)
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
        <Button icon='plus' classe={'button-new-process'} text="Novo processo" onClick={handleSubmit} />
      </section>
      <ProcessList processes={hiringProcesses} />
    </div>
  )
}

export default HiringProcessPage

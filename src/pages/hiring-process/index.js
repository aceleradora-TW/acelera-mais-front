import Button from '../../components/button'
import { ProcessList } from '../../components/hiring-process-list'
import './style.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import api from '../../services/api'
import { useEffect, useState } from 'react'

const HiringProcessPage = () => {
  const [apiData, setApiData] = useState([])

  useEffect(async () => {
    try {
      const response = await api.get('hiring_process')
      setApiData(response.data)
    } catch (e) {
      console.error(e)
    }
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
        <Button icon={faPlus} classe={'button-new-process'} text="Novo processo" onClick={handleSubmit} />
      </section>
      <ProcessList processes={apiData} />
    </div>
  )
}

export default HiringProcessPage

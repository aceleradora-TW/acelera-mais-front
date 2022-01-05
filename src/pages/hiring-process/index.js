import Button from '../../components/buttons/button'
import { Modal } from '../../components/modal'
import { HiringProcessForm } from '../../components/forms/hiring-process'
import { ProcessList } from '../../components/hiring-process-list'
import './style.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { client } from '../../service'
import showFeature from '../../feature-toggle'

const HiringProcessPage = () => {
  const [hiringProcesses, setHiringProcesses] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    client.get('/hiring_process')
      .then(res => setHiringProcesses(res.data))
      .catch(err => {
        console.log(err)
        setHiringProcesses([])
        navigate('/')
      })
  }, [])

  const handleSubmit = () => {
    location.reload()
  }

  const role = localStorage.getItem('role')
  const admin = role === 'admin'

  return (
    <div className="page-container">

      <h1>Processos seletivos</h1>
      <section>
        {showFeature()
          ? (<div>
            <Button classe={'button-filter'} text="Todos" onClick={handleSubmit} />
            <Button classe={'button-filter'} text="Abertos" onClick={handleSubmit} />
            <Button classe={'button-filter'} text="Fechados" onClick={handleSubmit} />
          </div>)
          : null}
        {admin && <Modal icon={faPlus} classe={'button-new-process'} text="Novo processo" title="Criar novo processo">
          <HiringProcessForm callback={handleSubmit} />
        </Modal>}
      </section>
      <ProcessList processes={hiringProcesses} setHiringProcesses={setHiringProcesses} />
    </div>
  )
}

export default HiringProcessPage

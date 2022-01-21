import Button from '../../components/buttons/button'
import { Modal } from '../../components/modal'
import { HiringProcessForm } from './forms/hiring-process'
import { ProcessList } from '../hiring-process/components/hiring-process-list'
import './style.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { client } from '../../service'
import showFeature from '../../utils/feature-toggle'
import { isAdmin } from '../../utils/isAdmin'
import { useTranslation } from 'react-i18next'

const HiringProcessPage = () => {
  const { t } = useTranslation()
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

  return (
    <div className="page-container">
      <section>
        <h1>Processos seletivos</h1>
        {showFeature()
          ? (<div>
            <Button classe="button-filter" text={t('hiring-process.filter.all')} onClick={handleSubmit} />
            <Button classe="button-filter" text={t('hiring-process.filter.open')} onClick={handleSubmit} />
            <Button classe="button-filter" text={t('hiring-process.filter.closed')} onClick={handleSubmit} />
          </div>)
          : null}
        {isAdmin() && <Modal icon={faPlus} classe='button primary' text={t('hiring-process.modal.text')} title={t('hiring-process.modal.title')}>
          <HiringProcessForm callback={handleSubmit} />
        </Modal>}
      </section>
      <ProcessList processes={hiringProcesses} setHiringProcesses={setHiringProcesses} />
    </div>
  )
}

export default HiringProcessPage

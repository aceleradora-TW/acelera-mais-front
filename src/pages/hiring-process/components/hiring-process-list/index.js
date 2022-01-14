import React, { useState } from 'react'
import Button from '../../../../components/buttons/button'
import DefaultButton from '../../../../components/buttons/default'
import { Status } from '../../../../components/status'
import { Modal } from '../../../../components/modal'
import { HiringProcessForm } from '../../forms/hiring-process'
import { ImportGoogleSheet } from '../import-google-sheet'
import { client } from '../../../../service'
import {
  faAngleDown,
  faDownload,
  faUpload, faTrashAlt
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { parse } from 'json2csv'
import showFeature from '../../../../utils/feature-toggle'
import { Container, HiringProcessTable } from './styles'
import { hiringProcessAdapter } from '../../adapter/hiring-process-adapter'
import { isAdmin } from '../../../../utils/isAdmin'

export const ProcessList = ({ processes, setHiringProcesses }) => {
  const [csv, setCSV] = useState('')

  const handleExport = (id) => {
    return async () => {
      const result = await client.get(`/exercise?hiringProcessId=${id}`)
      const hiringProcessResume = result.data.data.result
      const hiringProcessResult = hiringProcessAdapter(hiringProcessResume)
      const csv = parse(hiringProcessResult)
      setCSV('donwload...')
      window.open('data:text/csv;charset=utf-8,' + escape(csv))
    }
  }

  const handleEdit = async () => {
    location.reload()
  }

  const handleDelete = async (id) => {
    try {
      const answer = confirm('Deseja excluir o item?')
      if (answer === false) return
      client.delete(`/hiring_process/${id}`)
      const newProcesses = processes.filter(process => process.id !== id)
      setHiringProcesses(newProcesses)
    } catch (error) {
      console.error(error)
    }
  }

  const formatDate = (date) => {
    const addZero = (number) => number <= 9 ? '0' + number : number
    const newDate = new Date(date)
    const day = addZero(newDate.getUTCDate().toString())
    const month = addZero((newDate.getUTCMonth() + 1).toString())
    const year = newDate.getUTCFullYear()
    return `${day}/${month}/${year}`
  }

  return (
    <Container>
      <HiringProcessTable>
        <thead>
          <tr>
            <th>Processo</th>
            <th>Status</th>
            <th>Data de início</th>
            <th colSpan="6">Ações</th>
          </tr>
        </thead>
        <tbody>
          {processes.map((process, key) => (
            <tr key={`process-${key}`}>
              <td><Link to={`/exercises/hiring-process/${process.id}`}>{process.name}</Link></td>
              <td>
                <Status
                  status={process.status}
                />
              </td>
              <td>{formatDate(process.startDate)}</td>
              {isAdmin() && <td>
                <Modal
                  icon={faUpload}
                  label="Importar"
                  title="Importar dados das candidatas"
                  reminder="Obs: Para finalizar a integração, compartilhe o e-mail: acelera-mais@aceleradora-agil-331516.iam.gserviceaccount.com"
                  classe="button default"
                  text="Importar candidatas"
                >
                  <ImportGoogleSheet
                    id={process.id}
                    endpoint="candidate"
                  />
                </Modal>
              </td>}
              {isAdmin() && <td>
                <Modal
                  icon={faUpload}
                  label="Importar"
                  title="Importar desafios das candidatas"
                  reminder="Obs: Para finalizar a integração, compartilhe o e-mail: acelera-mais@aceleradora-agil-331516.iam.gserviceaccount.com"
                  classe="button default"
                  text="Importar desafios"
                >
                  <ImportGoogleSheet
                    id={process.id}
                    endpoint="exercise"
                  />
                </Modal>
              </td>}
              {isAdmin() && <><td>
                <Modal
                  icon={faDownload}
                  label="Download arquivo csv"
                  title="Download arquivo csv"
                  classe="button default"
                  text="Exportar Dados"
                  callback={handleExport(process.id)}
                >
                  {csv}
                </Modal>
              </td><td>
                </td></>}
              {isAdmin() && <td>
                <Modal
                  label="Editar"
                  title="Editar processos seletivos"
                  classe="button action"
                  text="Editar">
                  <HiringProcessForm
                    callback={handleEdit}
                    method="PATCH"
                    id={process.id} />
                </Modal>
              </td>}
              {showFeature()
                ? (<td>
                  <DefaultButton
                    icon={faAngleDown}
                    classe="button default"
                    text="Ver mais"
                  />
                </td>)
                : null}
              {isAdmin() && <td>
                <Button icon={faTrashAlt}
                  classe="button delete"
                  onClick={() => handleDelete(process.id)}
                />
              </td>}
            </tr>
          ))}
        </tbody>
      </HiringProcessTable>
    </Container>
  )
}

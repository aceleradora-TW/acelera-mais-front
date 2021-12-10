import React from 'react'
import Button from '../button'
import { Status } from '../status'
import { Modal } from '../modal'
import { HiringProcessForm } from '../forms/hiring-process'
import { ImportGoogleSheet } from '../import-google-sheet'
import './process-list.css'
import { client } from '../../service'
import {
  faAngleDown,
  faDownload,
  faUpload, faTrashAlt
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const ProcessList = ({ processes, setHiringProcesses }) => {
  const role = localStorage.getItem('role')
  const admin = role === 'admin'

  const handleExport = () => { }

  const handleExpand = () => { }

  const handleEdit = async () => {
    location.reload()
  }

  const handleDelete = async (id) => {
    try {
      const answer = confirm('Deseja excluir o item?')
      if (answer === false) return
      const result = await client.delete(`/hiring_process/${id}`)
      const newProcesses = processes.filter(process => process.id !== id)
      setHiringProcesses(newProcesses)
      console.log(result.data)
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
    <div className="table-selective-process">
      <table>
        <thead>
          <tr>
            <th>Processo</th>
            <th>Status</th>
            <th>Data de início</th>
            <th colSpan="4">Ações</th>
          </tr>
        </thead>
        <tbody>
          {processes.map((process, key) => (
            <tr key={`process-${key}`}>
              <td><Link to={`/exercises/${process.id}`}>{process.name}</Link></td>
              <td>
                <Status
                  status={process.status}
                />
              </td>
              <td>{formatDate(process.startDate)}</td>
              {admin && <td>
                <Modal
                  icon={faUpload}
                  label="Importar"
                  title="Importar desafios das candidatas"
                  classe="button-import"
                  text="Importar desafios"
                >
                  <ImportGoogleSheet
                    id={process.id}
                  />
                </Modal>
              </td>}
              {admin && <td>
                <Modal
                  icon={faUpload}
                  label="Importar"
                  title="Importar dados das candidatas"
                  classe="button-import"
                  text="Importar candidatas"
                >
                  <ImportGoogleSheet
                    id={process.id}
                  />
                </Modal>

              </td>}
              {admin && <td>
                <Button
                  icon={faDownload}
                  classe="button-export"
                  text="Exportar dados"
                  onClick={handleExport}
                />
              </td>}
              {admin && <td>
                <Modal
                  label="Editar"
                  title="Editar processos seletivos"
                  classe="button-edit"
                  text="Editar">
                  <HiringProcessForm
                    callback={handleEdit}
                    method="PATCH"
                    id={process.id} />
                </Modal>
              </td>}
              <td>
                <Button
                  icon={faAngleDown}
                  classe="button-expend"
                  text="Ver mais"
                  onClick={handleExpand}
                />
              </td>
              {admin && <td>
                <Button icon={faTrashAlt}
                  classe="button-delete"
                  onClick={() => handleDelete(process.id)}
                />
              </td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

import React from 'react'
import Button from '../button'
import { Status } from '../status'
import { Modal } from '../modal'
import { HiringProcessForm } from '../forms/hiring-process'
import './process-list.css'
import { client } from '../../service'
import {
  faAngleDown,
  faDownload,
  faUpload, faTrashAlt
} from '@fortawesome/free-solid-svg-icons'

export const ProcessList = ({ processes, setHiringProcesses }) => {
  const handleImport = () => { }

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

  // const startDate = () => {
  //   const result = client.get('/hiring_process')
  //   const filter = processes.filter(process => process.startDate)
  //   setHiringProcesses(filter)
  //   console.log(result.startDate)
  // }

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
              <td>{process.name}</td>
              <td>
                <Status
                  status={process.status}
                />
              </td>
              <td>{process.startDate}</td>
              <td>
                <Button
                  icon={faDownload}
                  classe="button-import"
                  text="Importar dados"
                  onClick={handleImport}
                />
              </td>
              <td>
                <Button
                  icon={faUpload}
                  classe="button-import"
                  text="Exportar tabela"
                  onClick={handleExport}
                />
              </td>

              <td>
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
              </td>
              <td>
                <Button
                  icon={faAngleDown}
                  classe="button-expend"
                  text="Ver mais"
                  onClick={handleExpand}
                />
              </td>
              <td>
                <Button icon={faTrashAlt}
                  classe="button-delete"
                  onClick={() => handleDelete(process.id)}
                /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

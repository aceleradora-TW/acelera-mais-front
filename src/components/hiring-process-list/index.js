import React from 'react'
import Button from '../button'
import { Status } from '../status'
import { Modal } from '../modal'
import { HiringProcessForm } from '../forms/hiring-process'
import './process-list.css'
import {
  faAngleDown,
  faDownload,
  faUpload, faTrashAlt
} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export const ProcessList = ({ processes, setHiringProcesses }) => {
  const handleImport = () => { }

  const handleExport = () => { }

  const handleExpand = () => { }

  const handleEdit = (response) => {
    const { hiringProcess } = response
    const newProcesses = [...processes]
    if (hiringProcess) {
      const index = newProcesses.findIndex(process => process.id === hiringProcess.id)
      if (index) {
        newProcesses[index] = {
          name: hiringProcess.name,
          startDate: new Date(hiringProcess.startDate),
          endDate: new Date(hiringProcess.endDate),
          description: hiringProcess.description
        }
        setHiringProcesses(newProcesses)
      }
    }
  }

  const handleDelete = async (id) => {
    try {
      const result = await axios.delete(`https://test-acelera-mais-api.herokuapp.com/hiring_process/${id}`)
      const newProcesses = processes.filter(process => process.id !== id)
      setHiringProcesses(newProcesses)
      console.log(result.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="table-selective-process">
      <table>
        <thead>
          <tr>
            <th>Processo</th>
            <th>Status</th>
            <th colSpan="4">Ações</th>
          </tr>
        </thead>
        <tbody>
          {processes.map((process, key) => (
            <tr key={`process-${key}`}>
              <td>{process.name}</td>
              <td>
                <Status
                  startDate={process.startDate}
                  endDate={process.endDate}
                />
              </td>
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

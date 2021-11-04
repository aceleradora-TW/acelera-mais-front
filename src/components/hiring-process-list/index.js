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

export const ProcessList = ({ processes }) => {
  const handleImport = () => { }

  const handleExport = () => { }

  const handleExpand = () => { }

  const handleDelete = async (id) => {
    const result = await axios.delete(`https://prod-acelera-mais-api.herokuapp.com/hiring-process/${id}`)
    console.log(result.data)
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
                  classe="button-edit">
                  <HiringProcessForm method="PATCH" id={process.id} />
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

import React from 'react'
import Button from '../button'
import { Status } from '../status'
import Modal from '../modal'
import './process-list.css'
import {
  faAngleDown,
  faDownload,
  faUpload
} from '@fortawesome/free-solid-svg-icons'

export const ProcessList = ({ processes }) => {
  const handleImport = () => { }

  const handleExport = () => { }

  const handleExpand = () => { }
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
              {/*  <td><Button classe="button-edit" text="Editar" onClick={handleEdit} /></td> */}
              <td>
                <Modal
                  label="Editar"
                  title="Editar Processo Seletivo"
                  className="button-edit">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

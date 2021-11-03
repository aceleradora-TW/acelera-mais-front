import React from 'react'
import Button from '../button'
import { Status } from '../status'
import './process-list.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faDownload, faUpload } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleDown, faDownload, faUpload)

export const ProcessList = ({ processes }) => {
  const handleImport = () => {
  }

  const handleExport = () => {
  }

  const handleEdit = () => {
  }

  const handleExpand = () => {
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
              <td><Button icon='download' classe="button-import" text="Importar dados" onClick={handleImport}/></td>
              <td><Button icon='upload' classe="button-import" text="Exportar tabela" onClick={handleExport} /></td>
              <td><Button classe="button-edit" text="Editar" onClick={handleEdit} /></td>
              <td><Button icon='angle-down' classe="button-expend" text="Ver mais" onClick={handleExpand} /></td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

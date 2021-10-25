import React from 'react'
import Button from '../button'
import { Status } from '../status'
import './process-list.css'
import { faAngleDown, faDownload, faUpload } from '@fortawesome/free-solid-svg-icons'

export const ProcessList = ({ processes }) => {
  const handleImport = () => {
    console.log('Clicado no importar dados')
  }

  const handleExport = () => {
    console.log('clicado no export dados')
  }

  const handleEdit = () => {
    console.log('Clicado no editar')
  }

  const handleExpand = () => {
    console.log('Clicado no veja mais')
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
              <td><Button icon={faDownload} classe="button-import" text="Importar Dados" onClick={handleImport}/></td>
              <td><Button icon={faUpload} classe="button-import" text="Exportar tabela" onClick={handleExport} /></td>
              <td><Button classe="button-edit" text="Editar" onClick={handleEdit} /></td>
              <td><Button icon={faAngleDown} classe="button-expend" text="Ver mais" onClick={handleExpand} /></td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

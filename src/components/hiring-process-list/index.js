import React from 'react'
import Button from '../button'
import { Status } from '../status'
import { Modal } from '../modal'
import { HiringProcessForm } from '../forms/hiring-process'
import { InputText } from '../inputs/text'
import './process-list.css'
import { client } from '../../service'
import {
  faAngleDown,
  faDownload,
  faUpload, faTrashAlt
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const ProcessList = ({ processes, setHiringProcesses }) => {
  const handleImport = () => { }

  const handleExport = () => { }

  const handleExpand = () => { }

  const handleEdit = async () => {
    location.reload()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setHiringProcesses({
      ...processes,
      [name]: value
    })
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
              <td><Link to={`/exercises/${process.id}`}>{process.name}</Link></td>
              <td>
                <Status
                  status={process.status}
                />
              </td>
              <td>
                <Modal
                  icon={faUpload}
                  label="Importar"
                  title="Importe planilha do processo seletivo"
                  classe="button-import"
                  text="Importar tabela"
                  onClick={handleImport}>
                  <InputText name="name" label="Insira a URL da planilha:" onChange={handleChange} />
                  <Button classe='button-submit' type="button" text='Enviar' onClick={handleImport}>
                  Enviar
                  </Button>
                  </Modal>

              </td>
              <td>
                <Button
                  icon={faDownload}
                  classe="button-export"
                  text="Exportar dados"
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

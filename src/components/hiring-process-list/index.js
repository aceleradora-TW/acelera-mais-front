import React, { useState } from 'react'
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
import { parse } from 'json2csv'

export const ProcessList = ({ processes, setHiringProcesses }) => {
  const [csv, setCSV] = useState('')

  const handleExport = (id) => {
    return async () => {
      const result = await client.get(`/exercise?hiringProcessId=${id}`)
      const hiringProcessResume = result.data.data.result
      // console.log({ x: hiringProcessResume[0] })
      const hiringProcessResult = hiringProcessResume.map(h => ({
        name: h.name,
        email: h.addressEmail,
        phone: h.phone,
        birthDate: h.birthDate,
        genre: h.genre,
        skinColor: h.skinColor,
        instituitionName: h.instituitionName,
        courseName: h.courseName,
        milestone: h.milestone,
        howFound: h.howFound,
        expectations: h.expectation,
        motivation: h.motivation,
        curriculum: h.curriculum,
        okCI: h.okCI,
        exercise: h.exercise,
        fileType: h.fileType,
        zip: h.zip,
        github: h.github,
        haveComputer: h.haveComputer,
        haveInternet: h.haveInternet,
        haveWebcam: h.haveWebcam,
        canUseWebcam: h.canUseWebcam,
        cityState: h.cityState
      }))
      // console.log(hiringProcessResult)
      setCSV(console.log({ csv: parse(hiringProcessResult) }))
    }
  }
  const role = localStorage.getItem('role')
  const admin = role === 'admin'

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
                  title="Importar dados das candidatas"
                  reminder="Obs: Para finalizar a integração, compartilhe o e-mail: acelera-mais@aceleradora-agil-331516.iam.gserviceaccount.com"
                  classe="button-import"
                  text="Importar candidatas"
                >
                  <ImportGoogleSheet
                    id={process.id}
                    endpoint="candidate"
                  />
                </Modal>
              </td>}
              {admin && <td>
                <Modal
                  icon={faUpload}
                  label="Importar"
                  title="Importar desafios das candidatas"
                  reminder="Obs: Para finalizar a integração, compartilhe o e-mail: acelera-mais@aceleradora-agil-331516.iam.gserviceaccount.com"
                  classe="button-import"
                  text="Importar desafios"
                >
                  <ImportGoogleSheet
                    id={process.id}
                    endpoint="exercise"
                  />
                </Modal>
              </td>}
              {admin && <><td>
                <Modal
                  icon={faDownload}
                  label="copie seu csv"
                  title="Copie seu CSV"
                  classe="button-export"
                  text="Exportar Dados"
                  callback={handleExport(process.id)}
                >
                  {csv}
                </Modal>
              </td><td>
                </td></>}
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
    </div >
  )
}

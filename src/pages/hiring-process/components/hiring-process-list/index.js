import React, { useState } from 'react'
import Button from '../../../../components/buttons/button'
import { Status } from '../../../../components/status'
import { Modal } from '../../../../components/modal'
import { HiringProcessForm } from '../../forms/hiring-process'
import { ImportGoogleSheet } from '../../../../components/import-google-sheet'
import { client } from '../../../../service'
import {
  faAngleDown,
  faDownload,
  faUpload, faTrashAlt
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { parse } from 'json2csv'
import showFeature from '../../../../feature-toggle'
import { ProcessTable } from './styles'

export const ProcessList = ({ processes, setHiringProcesses }) => {
  const [csv, setCSV] = useState('')

  const handleExport = (id) => {
    return async () => {
      const result = await client.get(`/exercise?hiringProcessId=${id}`)
      const hiringProcessResume = result.data.data.result
      const hiringProcessResult = hiringProcessResume.map(h => ({
        name: h.name,
        email: h.addressEmail,
        phone: h.phone,
        birthDate: h.candidate.birthDate,
        genre: h.candidate.genre || '',
        skinColor: h.candidate.skinColor || '',
        instituitionName: h.candidate.instituitionName || '',
        courseName: h.candidate.courseName || '',
        milestone: h.candidate.milestone || '',
        howFound: h.candidate.howFound || '',
        expectation: h.candidate.expectation || '',
        motivation: h.candidate.motivation || '',
        curriculum: h.candidate.curriculum || '',
        okCI: h.candidate.okCI || '',
        exercise: h.exercise,
        fileType: h.fileType,
        zip: h.zip,
        github: h.github,
        haveComputer: h.haveComputer,
        haveInternet: h.haveInternet,
        haveWebcam: h.haveWebcam,
        canUseWebcam: h.canUseWebcam,
        cityState: h.cityState,
        createdAt: h.evaluation.createdAt,
        feedback: h.evaluation.feedback || '',
        mentorName: h.evaluation.mentorName || '',
        score: h.evaluation.score || '',
        updateAt: h.evaluation.updateAt || ''
      }))
      const csv = parse(hiringProcessResult)
      setCSV('donwload...')
      window.open('data:text/csv;charset=utf-8,' + escape(csv))
    }
  }
  const role = localStorage.getItem('role')
  const admin = role === 'admin'

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
    <ProcessTable>
      <div>
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
                <td><Link to={`/exercises/hiring-process/${process.id}`}>{process.name}</Link></td>
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
                    classe="button default"
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
                    classe="button default"
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
                {admin && <td>
                  <Modal
                    label="Editar"
                    title="Editar processos seletivos"
                    classe="button default"
                    text="Editar">
                    <HiringProcessForm
                      callback={handleEdit}
                      method="PATCH"
                      id={process.id} />
                  </Modal>
                </td>}
                {showFeature()
                  ? (<td>
                    <Button
                      icon={faAngleDown}
                      classe="button default"
                      text="Ver mais"
                    />
                  </td>)
                  : null}
                {admin && <td>
                  <Button icon={faTrashAlt}
                    classe="button delete"
                    onClick={() => handleDelete(process.id)}
                  />
                </td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div >
    </ProcessTable>
  )
}

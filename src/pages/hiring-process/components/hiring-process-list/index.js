import React, { useState } from 'react'
import Button from '../../../../components/buttons/button'
import DefaultButton from '../../../../components/buttons/default'
import { Status } from '../../../../components/status'
import { Modal } from '../../../../components/modal'
import { HiringProcessForm } from '../../forms/hiring-process'
import { ImportGoogleSheet } from '../import-google-sheet'
import { client } from '../../../../service'
import {
  faAngleDown,
  faDownload,
  faUpload, faTrashAlt
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { parse } from 'json2csv'
import showFeature from '../../../../utils/feature-toggle'
import { Container, HiringProcessTable, ModalCandidateContent } from './styles'
import { hiringProcessAdapter } from '../../adapter/hiring-process-adapter'
import { isAdmin } from '../../../../utils/isAdmin'
import { useTranslation } from 'react-i18next'
const mock = require('../../../user/mock/invalidate-mock.json')

export const ProcessList = ({ processes, setHiringProcesses }) => {
  const { t } = useTranslation()
  const [csv, setCSV] = useState('')

  const handleExport = (id) => {
    return async () => {
      const result = await client.get(`/challenge?hiringProcessId=${id}`)
      const hiringProcessResume = result.data.data.result
      const hiringProcessResult = hiringProcessAdapter(hiringProcessResume)
      const csv = parse(hiringProcessResult)
      setCSV('donwload...')
      window.open('data:text/csv;charset=utf-8,' + escape(csv))
    }
  }

  const handleEdit = async () => {
    location.reload()
  }

  const handleDelete = async (id) => {
    try {
      const answer = confirm(t('hiringProcess.delete'))
      if (answer === false) return
      client.delete(`/hiring_process/${id}`)
      const newProcesses = processes.filter(process => process.id !== id)
      setHiringProcesses(newProcesses)
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
    <Container>
      <HiringProcessTable>
        <thead>
          <tr>
            <th>{t('hiringProcess.thead.title')}</th>
            <th>Status</th>
            <th>{t('hiringProcess.thead.start')}</th>
            <th colSpan="6">{t('hiringProcess.thead.actions')}</th>
          </tr>
        </thead>
        <tbody>
          {processes.map((process, key) => (
            <tr key={`process-${key}`}>
              <td><Link to={`/challenges/hiring-process/${process.id}`}>{process.name}</Link></td>
              <td>
                <Status
                  status={process.status}
                />
              </td>
              <td>{formatDate(process.startDate)}</td>
              {isAdmin() && <td>
                <Modal
                  icon={faUpload}
                  label="Importar"
                  title={t('hiringProcess.import.candidates.title')}
                  reminder={t('hiringProcess.import.candidates.reminder')}
                  classe="button default"
                  text={t('hiringProcess.import.candidates.text')}
                >
                  <ImportGoogleSheet
                    id={process.id}
                    endpoint="candidate"
                  />
                </Modal>
              </td>}
              {isAdmin() && <td>
                <Modal
                  icon={faUpload}
                  label="Importar"
                  title={t('hiringProcess.import.challenges.title')}
                  reminder={t('hiringProcess.import.challenges.reminder')}
                  classe="button default"
                  text={t('hiringProcess.import.challenges.text')}
                >
                  <ImportGoogleSheet
                    id={process.id}
                    endpoint="challenge"
                  />
                </Modal>
              </td>}
              {isAdmin() && <><td>
                <Modal
                  icon={faDownload}
                  label="Download arquivo csv"
                  title={t('hiringProcess.export.download')}
                  classe="button default"
                  text={t('hiringProcess.export.text')}
                  callback={handleExport(process.id)}
                >
                  {csv}
                </Modal>
              </td><td>
                </td></>}
              {isAdmin() && <td>
                <Modal
                  label="Candidatas Inválidas"
                  title={t('hiringProcess.invalidate.title')}
                  classe="button action"
                  text={t('hiringProcess.invalidate.text')}
                >
                  <ModalCandidateContent>
                    {mock.map((a, key) => (<p key={key}>{a.email}</p>))}
                  </ModalCandidateContent>
                </Modal> </td>}
              {isAdmin() && <td>
                <Modal
                  label="Editar"
                  title={t('hiringProcess.edit.title')}
                  classe="button action"
                  text={t('hiringProcess.edit.text')}>
                  <HiringProcessForm
                    callback={handleEdit}
                    method="PATCH"
                    id={process.id} />
                </Modal>
              </td>}
              {showFeature()
                ? (<td>
                  <DefaultButton
                    icon={faAngleDown}
                    classe="button default"
                    text={t('hiringProcess.show-more')}
                  />
                </td>)
                : null}
              {isAdmin() && <td>
                <Button icon={faTrashAlt}
                  classe="button delete"
                  onClick={() => handleDelete(process.id)}
                />
              </td>}
            </tr>
          ))}
        </tbody>
      </HiringProcessTable>
    </Container >
  )
}

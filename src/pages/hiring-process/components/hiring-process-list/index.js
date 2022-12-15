import React, { useState } from 'react'
import DefaultButton from '../../../../components/buttons/default'
import { Status } from '../../../../components/status'
import { Modal } from '../../../../components/modal'
import { HiringProcessForm } from '../../forms/hiring-process'
import { ImportGoogleSheet } from '../import-google-sheet'
import { client } from '../../../../service'
import {
  faAngleDown,
  faDownload,
  faUpload
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { parse } from 'json2csv'
import showFeature from '../../../../utils/feature-toggle'
import { Container, HiringProcessTable } from './styles'
import { isAdmin } from '../../../../utils/isAdmin'
import { useTranslation } from 'react-i18next'

export const ProcessList = ({ processes }) => {
  const { t } = useTranslation()
  const [csv, setCSV] = useState('')

  const handleExport = (id) => {
    return async () => {
      const result = await client.get(`/challenge?hiringProcessId=${id}&csv=true`)
      const hiringProcessResume = result.data.data.result
      const csv = parse(hiringProcessResume)
      setCSV('donwload...')
      window.open('data:text/csv;charset=utf-8,' + escape(csv))
    }
  }

  const handleEdit = async () => {
    location.reload()
  }

  const isHiringProcessClosed = (status) => status === 'status-closed'

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
                  className="button default"
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
                  className="button default"
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
                  className="button default"
                  text={t('hiringProcess.export.text')}
                  callback={handleExport(process.id)}
                >
                  {csv}
                </Modal>
              </td><td>
                </td></>}

              {isAdmin() && <td>
                <Modal
                  label="Editar"
                  title={t('hiringProcess.edit.title')}
                  className="button action"
                  text={t('hiringProcess.edit.text')}
                  disabled={isHiringProcessClosed(process.status)}>
                  <HiringProcessForm
                    callback={handleEdit}
                    method="PATCH"
                    id={process.id}
                    process={process}
                    />
                </Modal>
              </td>}
              {showFeature()
                ? (<td>
                  <DefaultButton
                    icon={faAngleDown}
                    className="button default"
                    text={t('hiringProcess.show-more')}
                  />
                </td>)
                : null}
            </tr>
          ))}
        </tbody>
      </HiringProcessTable>
    </Container >
  )
}

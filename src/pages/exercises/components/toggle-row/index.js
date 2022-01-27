import { faAngleDown, faPen } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import ActionButton from '../../../../components/buttons/action'
import Button from '../../../../components/buttons/button'
import { Status } from '../../../../components/status'
import { client } from '../../../../service'
import { useNavigate } from 'react-router-dom'
import { Tr } from './styled'
import { useTranslation } from 'react-i18next'

const statusEnum = {
  PREPARING: 'status-preparing',
  CLOSED: 'status-closed',
  OPENED: 'status-opened'
}

const getStatus = (item) => {
  if (!item.evaluation) return statusEnum.OPENED
  const { feedback, mentorName } = item.evaluation
  if (mentorName === 'cancelado') return statusEnum.OPENED
  if (feedback && mentorName) return statusEnum.CLOSED
  if (mentorName) return statusEnum.PREPARING
  return statusEnum.OPENED
}

const isClosedOrPreparing = ({ status }) => {
  if (status === statusEnum.PREPARING || status === statusEnum.CLOSED) return true
  return false
}

const isPreparingOrOpened = ({ status }) => {
  if (status === statusEnum.PREPARING || status === statusEnum.OPENED) return true
  return false
}

const isOpened = ({ status }) => {
  return status === statusEnum.OPENED
}

const isClosed = ({ status }) => {
  if (status === statusEnum.CLOSED) return true
  return false
}

const isPreparing = ({ status }, mentorName, mentorNameLocal) => {
  if (status === statusEnum.PREPARING && mentorName !== mentorNameLocal) return true
  return false
}

export const ToggleRow = ({ item }) => {
  const { t } = useTranslation()
  const [checked, setChecked] = useState(false)
  const navigate = useNavigate()
  const [mentorNameLocal] = useState(localStorage.getItem('mentorName'))
  const toggle = checked ? 'toggle-on' : 'toggle-off'
  const feedback = item?.evaluation?.feedback || ''
  const status = isClosedOrPreparing({ status: getStatus(item) })

  const handleClick = () => {
    setChecked(!checked)
  }

  const handleSubmit = () => {
    const id = window.location.pathname.split('/').pop()
    client.patch(`/evaluation/${item.evaluation.id}`, { mentorName: mentorNameLocal })
    navigate(`/exercises/${item.id}/hiring-process/${id}`)
  }

  return (
    <>
      <Tr>
        <td>{item.exercise}</td>
        <td>{item.type ? item.type : t('exercise.toggle-row.type')}</td>
        <td className='options' colSpan='2'>
          {!isOpened(item)
            ? <Status
              status={getStatus(item)}
              options={{
                opened: 'Aberto',
                closed: `Fechado por: ${item.evaluation.mentorName}`,
                prepairing: `Em preparação por: ${item.evaluation.mentorName}`
              }} />
            : null}
          <ActionButton
            text={t('exercise.toggle-row.evaluate')}
            icon={faPen}
            disabled={isClosed({ status: getStatus(item) }) || isPreparing({ status: getStatus(item) }, item.evaluation.mentorName, mentorNameLocal)}
            onClick={handleSubmit} />
        </td>
        <td className='avaliator-col'>{
          <Button
            classe={`${toggle} primary`}
            disabled={isPreparingOrOpened({ status: getStatus(item) })}
            onClick={handleClick}
            icon={faAngleDown} />
        }</td>
      </Tr>
      {status && feedback !== '' ? <tr><td colSpan='5' className={toggle}>{feedback}</td></tr> : null}
    </>
  )
}

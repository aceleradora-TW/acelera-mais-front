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

const getStatus = (evaluation) => {
  if (!evaluation) return statusEnum.OPENED
  const { feedback, mentorName } = evaluation
  if (mentorName === 'cancelado') return statusEnum.OPENED
  if (feedback && mentorName) return statusEnum.CLOSED
  if (mentorName) return statusEnum.PREPARING
  return statusEnum.OPENED
}

const isClosedChallenge = (exercises) => {
  return exercises.filter((ex) => getStatus(ex.evaluation) !== statusEnum.CLOSED).length === 0
}

const isPreparedChallenge = (exercises, mentorNameLocal) => {
  return exercises.some((ex) => {
    return isPreparing({
      status: getStatus(ex.evaluation),
      currentMentor: ex.evaluation.mentorName || '',
      actualMentor: mentorNameLocal
    }) === true
  })
}

const isPrepared = ({ status }) => status === statusEnum.PREPARING

const isOpened = ({ status }) => status === statusEnum.OPENED

const isClosed = ({ status }) => status === statusEnum.CLOSED

const isPreparingOrOpened = ({ status }) => isPrepared({ status }) || isOpened({ status })

const isClosedOrPreparing = ({ status }) => isPrepared({ status }) || isClosed({ status })

const isPreparing = ({ status, currentMentor, actualMentor }) =>
  isPrepared({ status }) && currentMentor !== actualMentor

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
    item.exercises.forEach((exercise) => {
      client.patch(`/evaluation/${exercise.evaluation.id}`, { mentorName: mentorNameLocal })
    })
    navigate(`/challenges/${item.id}/hiring-process/${id}`)
  }

  return (
    <>
      <Tr>
        <td>{item.challenge}</td>
        <td>{item.type || t('challenge.toggleRow.type')}</td>
        <td className='options' colSpan='2'>
          {item.exercises.map((excercise) => {
            return (<Status key={excercise.id}
              status={getStatus(excercise.evaluation)}
              options={{
                opened: 'status.opened',
                closed:
                  t(
                    'challenge.toggleRow.status.closed',
                    { mentor: excercise.evaluation.mentorName || '' }
                  ),
                preparing:
                  t(
                    'challenge.toggleRow.status.preparing',
                    { mentor: excercise.evaluation.mentorName || '' }
                  )
              }} />
            )
          }
          )}

          < ActionButton
            text={t('challenge.toggleRow.evaluate')}
            icon={faPen}
            disabled={isClosedChallenge(item.exercises) || isPreparedChallenge(item.exercises, mentorNameLocal)}
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

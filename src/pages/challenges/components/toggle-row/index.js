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

const hasFeedback = (challenge) => {
  if (!challenge.exercises) {
    return false
  }
  return challenge.exercises.find((feed) => feed.feedback !== null)
}

const hasMentorName = (challenge) => {
  if (!challenge.exercises) {
    return false
  }
  return challenge.exercises.find((nameMentor) => nameMentor.mentorName !== null)
}

const wasCanceled = (challenge) => {
  if (!challenge.exercises) {
    return false
  }
  return challenge.exercises.find((name) => name.mentorName === 'cancelado')
}

const getStatus = (challenge) => {
  if (!challenge) return statusEnum.OPENED
  if (wasCanceled(challenge)) return statusEnum.OPENED
  if (hasFeedback(challenge) && hasMentorName(challenge)) return statusEnum.CLOSED
  if (hasMentorName(challenge)) return statusEnum.PREPARING
  return statusEnum.OPENED
}

const getStatusEvaluation = (evaluation) => {
  if (!evaluation) return statusEnum.OPENED
  const { feedback, mentorName } = evaluation
  if (mentorName === 'cancelado') return statusEnum.OPENED
  if (feedback && mentorName) return statusEnum.CLOSED
  if (mentorName) return statusEnum.PREPARING
  return statusEnum.OPENED
}

const isClosedChallenge = (exercises) => {
  return exercises.filter((ex) => getStatusEvaluation(ex.evaluation) !== statusEnum.CLOSED).length === 0
}

const isPreparedChallenge = (exercises, mentorNameLocal) => {
  return exercises.some((ex) => {
    return isPreparing({
      status: getStatusEvaluation(ex.evaluation),
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

const getNumberChallenge = (exercises) => {
  const statusEvaluation = exercises.map(exercise => getStatusEvaluation(exercise.evaluation))
  const closed = statusEvaluation.filter(status => status === statusEnum.CLOSED).length
  return { closed, total: statusEvaluation.length }
}

const getFeedback = (exercises, toggle) => {
  const feedbacks = exercises.filter(exercise => exercise.evaluation.feedback)
  return (
    <tr>
      <td colSpan="6" className={toggle}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {feedbacks.map((feedback, index) => (
            <div key={index}>
              <strong>{feedback.name}</strong>
              <div>{feedback.evaluation.feedback} </div>
            </div>
          )
          )}
        </div>
      </td>
    </tr>
  )
}

export const ToggleRow = ({ item }) => {
  const { t } = useTranslation()
  const [checked, setChecked] = useState(false)
  const navigate = useNavigate()
  const [mentorNameLocal] = useState(localStorage.getItem('mentorName'))
  const toggle = checked ? 'toggle-on' : 'toggle-off'
  const status = isClosedOrPreparing({ status: getStatus(item) })
  const countExercise = getNumberChallenge(item.exercises)

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
        <td style={{ color: '#4fac16', fontWeight: 'bold' }}>{countExercise.closed}/{countExercise.total}</td>
        <td className='options'>
          <div>
            {item.exercises.map((excercise) => (
              <Status key={excercise.id}
                status={getStatusEvaluation(excercise.evaluation)}
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
            )}
          </div>
        </td>
        <td>
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
      {status && hasFeedback(item) ? getFeedback(item.exercises, toggle) : null}
    </>
  )
}

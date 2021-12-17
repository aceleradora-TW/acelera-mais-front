import { faAngleDown, faPen } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './style.css'
import ActionButton from '../buttons/action'
import Button from '../button'
import { MentorNameStatus } from '../mentor-name-status'
import { client } from '../../service'
import { useNavigate } from 'react-router-dom'

const statusEnum = {
  PREPARING: 'status-preparing',
  CLOSED: 'status-closed',
  OPENED: 'status-opened'
}

const getStatus = ({ evaluation }) => {
  const { feedback, mentorName } = evaluation
  if (feedback && mentorName) return 'status-closed'
  if (mentorName) return 'status-preparing'
  return 'status-opened'
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

export const ToggleRow = ({ item }) => {
  const [checked, setChecked] = useState(false)
  const navigate = useNavigate()
  const [mentorNameLocal] = useState(localStorage.getItem('mentorName'))
  const toggle = checked ? 'toggle-on' : 'toggle-off'
  const { evaluation: { feedback } } = item
  const status = isClosedOrPreparing({ status: getStatus(item) })

  const handleClick = () => {
    setChecked(!checked)
  }

  const handleSubmit = () => {
    const id = window.location.pathname.split('/').pop()
    client.patch(`/evaluation/${item.evaluation.id}`, { mentorName: mentorNameLocal })
    // location.replace(`/exercise/${item.id}/hiring-process/${id}`)
    navigate(`/exercises/${item.id}/hiring-process/${id}`)
  }

  return (
    <>
      <tr className='toggle-row-container'>
        <td>{item.exercise}</td>
        <td>{item.type ? item.type : 'Não definido'}</td>
        <td colSpan='2'>
          {!isOpened(item) ? <MentorNameStatus status={getStatus(item)} options={{ opened: 'Aberto', closed: item.evaluation.mentorName, prepairing: item.evaluation.mentorName }} /> : null}
          <ActionButton
            text={'Avaliar'}
            icon={faPen}
            disabled={isClosed({ status: getStatus(item) })}
            onClick={handleSubmit} />
        </td>
        <td className='avaliator-col'>{
          <Button
            classe={`${toggle} feedback-button`}
            disabled={isPreparingOrOpened({ status: getStatus(item) })}
            onClick={handleClick}
            icon={faAngleDown} />
        }</td>
      </tr>
      {status ? <tr><td colSpan='5' className={toggle}>{feedback}</td></tr> : null}
    </>
  )
}

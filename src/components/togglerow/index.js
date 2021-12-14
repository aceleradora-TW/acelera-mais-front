import { faAngleDown, faPen } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Status } from '../status'
import './style.css'
import ActionButton from '../buttons/action'
import Button from '../button'
// import { client } from '../../service'

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

export const ToggleRow = ({ item, key, exerciseId }) => {
  const [checked, setChecked] = useState(false)
  const toggle = checked ? 'toggle-on' : 'toggle-off'
  const { evaluation: { feedback } } = item
  const status = isClosedOrPreparing({ status: getStatus(item) })

  const handleClick = () => {
    setChecked(!checked)
  }

  const handleSubmit = () => {
    location.replace(`/evaluation/${item.id}`)
  }

  return (
    <>
      <tr key={key} className='toggle-row-container'>
        <td>{item.exercise}</td>
        <td>{item.type ? item.type : 'Não definido'}</td>
        <td colSpan='2'>
          {!isOpened(item) ? <Status status={getStatus(item)} /> : null}
          <ActionButton text={'Avaliar'} icon={faPen} disabled={status} onClick={() => handleSubmit()} />
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

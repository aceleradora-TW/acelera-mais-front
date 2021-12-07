import { faAngleDown, faPen } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Status } from '../status'
import './style.css'
import ActionButton from '../buttons/action'
import Button from '../button'

const statusEnum = {
  PREPARING: 'status-preparing',
  CLOSED: 'status-closed',
  OPENED: 'status-opened'
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

export const ToggleRow = ({ item, key }) => {
  const [checked, setChecked] = useState(false)
  const toggle = checked ? 'toggle-on' : 'toggle-off'
  const { evaluation: { feedback } } = item
  const status = isClosedOrPreparing(item)
  const handleClick = () => {
    setChecked(!checked)
  }

  return (
    <>
      <tr key={key} className='toggle-row-container'>
        <td>{item.name}</td>
        <td>{item.type}</td>
        <td colSpan='2'>
          { !isOpened(item) ? <Status status={item.status} /> : null }
          <ActionButton text={'avaliar'} icon={faPen} disabled={status} />
        </td>
        <td className='avaliator-col'>{
          <Button
          classe={`${toggle} feedback-button`}
          disabled={isPreparingOrOpened(item)}
          onClick={handleClick}
          icon={faAngleDown}/>
        }</td>
      </tr>
      {status ? <tr><td colSpan='5' className={toggle}>{feedback}</td></tr> : null}
    </>
  )
}

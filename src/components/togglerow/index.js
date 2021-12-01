import { faAngleUp, faPen } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Icon from '../icon'
import { Status } from '../status'
import './style.css'
import ActionButton from '../buttons/action'

const getStatus = ({ status }) => {
  if (status === 'status-preparing' || status === 'status-closed') return true
  return false
}

const hasFeedback = ({ status }) => {
  if (status === 'status-preparing' || status === 'status-opened') return true
  return false
}

export const ToggleRow = ({ item, key }) => {
  const [checked, setChecked] = useState(false)

  const botao = checked ? 'table-row-btn' : 'table-row-btn table-row-btn-checked'
  const feedbackLine = checked ? 'table-row-feedback' : 'table-row-feedback table-row-feedback-checked'

  const { evaluation: { feedback } } = item
  const status = getStatus(item)

  const handleClick = () => {
    setChecked(!checked)
  }
  return (
    <>
      <tr key={key} className='toggle-row-container'>
        <td>{item.name}</td>
        <td>{item.type}</td>
        <td colSpan='2'>
          {item.status !== 'status-opened' ? < Status status={item.status} /> : null}
          <ActionButton text={'avaliar'} icon={faPen} disabled={status} />
        </td>
        <td className='avaliator-col'>{
          <button
            className={botao}
            disabled={hasFeedback(item)}
            onClick={handleClick}
          >
            <Icon icon={faAngleUp} />
          </button>
        }</td>
      </tr>
      {status ? <tr><td colSpan='5' className={feedbackLine}>{feedback}</td></tr> : null}
    </>
  )
}

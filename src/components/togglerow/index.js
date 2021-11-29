import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Icon from '../icon'
import { Status } from '../status'
import './style.css'

const getStatus = ({ status }) => {
  if (status === 'status-preparing' || status === 'status-closed') return true
  return false
}

const hasFeedback = ({ status }) => {
  if (status === 'status-preparing' || status === 'status-opened') return true
  return false
}

export const ToggleRow = ({ item }) => {
  const [checked, setChecked] = useState(false)

  const botao = checked ? 'table-row-btn' : 'table-row-btn table-row-btn-checked'
  const feedbackLine = checked ? 'table-row-feedback' : 'table-row-feedback table-row-feedback-checked'

  const { evaluation: { feedback } } = item
  const status = getStatus(item)
  return (
    <>
      <tr className='toggle-row-container'>
        <td>{item.name}</td>
        <td>{item.type}</td>
        <td colSpan='2' className='avaliador-colSpan'>
          {item.status !== 'status-opened' ? < Status status={item.status} /> : null}
          <button disabled={status}>Avaliar</button>
        </td>
        <td>{
          <button className={botao} disabled={hasFeedback(item)} onClick={() => setChecked(!checked)}><Icon icon={faAngleUp} /></button>
        }</td>
      </tr>
      {status ? <tr><td colSpan='5' className={feedbackLine}>{feedback}</td></tr> : null}
    </>
  )
}

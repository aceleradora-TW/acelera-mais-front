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
  const { evaluation: { feedback } } = item
  const status = getStatus(item)
  return (
    <>
    <tr className= 'toggle-row-container'>
      <td>{item.name}</td>
      <td>{item.type}</td>
      <td colSpan='2'>
        {item.status !== 'status-opened' ? < Status status={item.status} /> : null}
        <button disabled={status}>Avaliar</button>
      </td>
      <td>{
        <button className='table-row-btn' disabled={hasFeedback(item)}>V</button>
        }</td>
    </tr>
    {status ? <tr><td colSpan='5'>{feedback}</td></tr> : null}
    </>
  )
}

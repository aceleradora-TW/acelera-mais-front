import { React } from 'react'
import './status.css'

export const Status = ({
  status, options = {
    opened: 'Aberto',
    closed: 'Fechado',
    prepairing: 'Em preparação'
  }
}) => {
  let label = options.closed

  if (status === 'status-opened') {
    label = options.opened
  }

  if (status === 'status-preparing') {
    label = options.prepairing
  }
  return (
    <span className={status}>{label}</span>
  )
}

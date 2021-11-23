import { React } from 'react'
import './status.css'

export const Status = ({ status }) => {
  let label = 'Fechado'
  if (status === 'status-opened') {
    label = 'Aberto'
  }
  if (status === 'status-preparing') {
    label = 'Em preparação'
  }
  return (
    <span className={status}>{label}</span>
  )
}

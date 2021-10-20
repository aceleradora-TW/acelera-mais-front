import React from 'react'
import './status.css'

export const Status = ({ startDate, endDate }) => {
  const label = endDate ? 'aberto' : 'fechado'
  const className = endDate ? 'status-open' : 'status-close'
  return (
    <span className={className}>{label}</span>
  )
}

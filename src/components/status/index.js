import React from 'react'
import './status.css'

export const Status = ({ startDate, endDate }) => {
  let label = 'fechado'
  let classNameStatus = 'status-close'
  const currentDate = Date.now()
  const startDateTime = new Date(startDate)
  const endDateTime = new Date(endDate)

  const statusPreparation = currentDate < startDateTime
  const statusOpened = currentDate >= startDateTime && currentDate < endDateTime

  if (statusPreparation) {
    label = 'em preparação'
    classNameStatus = 'status-preparation'
  }
  if (statusOpened) {
    label = 'aberto'
    classNameStatus = 'status-open'
  }
  return (
    <span className={classNameStatus}>{label}</span>
  )
}

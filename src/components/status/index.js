import React from 'react'
import './status.css'

export const Status = ({ startDate, endDate }) => {
  let label = ''
  // const className = endDate ? 'status-open' : 'status-close'
  const currentDate = Date.now()
  const startDateTime = new Date(startDate)
  const endDateTime = new Date(endDate)

  const statusPreparation = currentDate < startDateTime
  const statusOpened = currentDate >= startDateTime && currentDate < endDateTime
  const statusClosed = currentDate > endDateTime

  console.log(`em preparação ${statusPreparation}`)
  console.log(`aberto ${statusOpened}`)
  console.log(`fechado ${statusClosed}`)
  console.log(`hoje ${currentDate}`)

  if (statusPreparation) {
    label = 'em preparação'
  }
  if (statusOpened) {
    label = 'aberto'
  }
  if (statusClosed) {
    label = 'fechado'
  }
  return (
    <span>{label}</span>
  )
}

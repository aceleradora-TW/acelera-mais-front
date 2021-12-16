import { React } from 'react'
import './index.css'

export const MentorNameStatus = ({ status }) => {
  let label = localStorage.getItem('mentorName')
  if (status === 'status-opened') {
    label = 'Aberto'
  }
  if (status === 'status-preparing') {
    label = localStorage.getItem('mentorName')
  }
  return (
    <span className={status}>{label}</span>
  )
}

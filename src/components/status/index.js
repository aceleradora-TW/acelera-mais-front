import { React } from 'react'
import { StyledSpan } from './styles'

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
    <StyledSpan className={status}>{label}</StyledSpan>
  )
}

import { React } from 'react'
import { StyledSpan } from './styles'
import { useTranslation } from 'react-i18next'

export const Status = ({
  status, options = {
    opened: 'status.opened',
    closed: 'status.closed',
    preparing: 'status.preparing'
  }
}) => {
  const { t } = useTranslation()

  let label = t(options.closed)

  if (status === 'status-opened') {
    label = t(options.opened)
  }

  if (status === 'status-preparing') {
    label = t(options.preparing)
  }
  return (
    <StyledSpan className={status}>{label}</StyledSpan>
  )
}

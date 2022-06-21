import { React } from 'react'
import { StyledSpan } from './styles'
import { useTranslation } from 'react-i18next'

export const Status = ({
  status, options = {
    status: {
      green: 'status-opened',
      red: 'status-closed',
      yellow: {'status-preparing', 'first-login', 'email-resent'}
    }
    label: {
      green: 'status.opened',
      red: 'status.closed',
      yellow: 'status.preparing'
    }
  }
}) => {
  const { t } = useTranslation()

  let label = t(options.closed)

  if (options.status.green.includes(status)) {
    label = t(options.label.green)
  }

  if (options.status.yellow.includes(status)) {
    label = t(options.label.yellow)
  }
  return (
    <StyledSpan className={status}>{label}</StyledSpan>
  )
}

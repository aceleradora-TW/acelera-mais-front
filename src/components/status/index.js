import { React } from 'react'
import { StyledSpan } from './styles'
import { useTranslation } from 'react-i18next'

export const Status = ({
  status, options = {
    status: {
      green: ['status-opened', 'user-enabled'],
      red: ['status-closed', 'user-disabled'],
      yellow: ['status-preparing', 'first-login', 'email-resent']
    },
    label: {
      green: 'user.status.green',
      red: 'user.status.red',
      yellow: 'user.status.yellow'
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

import { React } from 'react'
import { StyledSpan } from './styles'
import { useTranslation } from 'react-i18next'

export const Status = ({
  status, options = {
    status: {
      green: ['status-opened'],
      red: ['status-closed'],
      yellow: ['status-preparing']
    },
    label: {
      green: 'status.opened',
      red: 'status.closed',
      yellow: 'status.preparing'
    }
  }
}) => {
  const { t } = useTranslation()

  let label = t(options.label.red)
  let cssClass = 'red'

  if (options.status.green.includes(status)) {
    label = t(options.label.green)
    cssClass = 'green'
  }

  if (options.status.yellow.includes(status)) {
    label = t(options.label.yellow)
    cssClass = 'yellow'
  }

  return (
    <StyledSpan className={cssClass}>{label}</StyledSpan>
  )
}

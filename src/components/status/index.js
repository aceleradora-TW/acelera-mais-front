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
  console.log(options)
  const { t } = useTranslation()
  // let label = options.label.red.color == null
  //   ? t(options.label.red)
  //   : t(options.label.red.color, options.label.red.description)

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

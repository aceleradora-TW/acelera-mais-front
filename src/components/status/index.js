import { React } from 'react'
import { StyledSpan } from './styles'
import { useTranslation } from 'react-i18next'

export const Status = ({
  status, options = {
    opened: 'Aberto',
    closed: 'Fechado',
    prepairing: 'Em preparação'
  }
}) => {
  const { t } = useTranslation()

  let label = t('status.closed')

  if (status === 'status-opened') {
    label = t('status.open')
  }

  if (status === 'status-preparing') {
    label = t('status.preparing')
  }
  return (
    <StyledSpan className={status}>{label}</StyledSpan>
  )
}

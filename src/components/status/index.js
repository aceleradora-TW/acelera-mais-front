import { React } from 'react'
import { StyledSpan } from './styles'
import { useTranslation } from 'react-i18next'

export const Status = ({
  status
}) => {
  const { t } = useTranslation()

  let label = t('hiringProcess.status.closed')

  if (status === 'status-opened') {
    label = t('hiringProcess.status.open')
  }

  if (status === 'status-preparing') {
    label = t('hiringProcess.status.preparing')
  }
  return (
    <StyledSpan className={status}>{label}</StyledSpan>
  )
}

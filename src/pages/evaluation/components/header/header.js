import { React } from 'react'
import { Type } from '../select-type/select-type'
import { HeaderContainer } from '../../styled'
import { useTranslation } from 'react-i18next'

export const Header = ({ setDisableEvaluationButton }) => {
  const { t } = useTranslation()

  return (
    <HeaderContainer>

      <h1>{t('evaluation.tittle')}</h1>

      <Type setDisableEvaluationButton={setDisableEvaluationButton} />

    </HeaderContainer>
  )
}

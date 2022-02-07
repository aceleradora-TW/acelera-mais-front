import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { Anchor, Subtitle, AnswerContainer } from '../../styled'
import { useTranslation } from 'react-i18next'

export const Answer = ({ challenge }) => {
  const { t } = useTranslation()

  return (
    <AnswerContainer>
      <Subtitle>{t('evaluation.answer')}</Subtitle>
      <div>
        {challenge.zip && <Anchor href={challenge.zip} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLink} /> Download zip</Anchor>}
        {challenge.github && <Anchor href={challenge.github} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faCodeBranch} /> Link do repositório</Anchor>}
      </div>
    </AnswerContainer>
  )
}

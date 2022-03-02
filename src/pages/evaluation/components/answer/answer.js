import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { Anchor, Subtitle, AnswerContainer } from '../../styled'
import { useTranslation } from 'react-i18next'

export const Answer = ({ exercise }) => {
  const { t } = useTranslation()

  return (
    <AnswerContainer>
      <Subtitle>{t('evaluation.answer')}</Subtitle>
      <div>
        {exercise.type === 'zip' && <Anchor href={exercise.link} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLink} /> Download zip</Anchor>}
        {exercise.type === 'github' && <Anchor href={exercise.link} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faCodeBranch} /> Link do repositório</Anchor>}
      </div>
    </AnswerContainer>
  )
}

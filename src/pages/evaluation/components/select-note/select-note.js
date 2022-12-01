import { React, useState } from 'react'
import Select from '../../../../components/select'
import { client } from '../../../../service'
import PrimaryButton from '../../../../components/buttons/primary'
import { ScoreContainer } from '../../styled'
import { useTranslation } from 'react-i18next'

export const Score = ({ exercise }) => {
  const [feedback, setFeedback] = useState('')
  const [score, setScore] = useState('')
  const { t } = useTranslation()

  const evaluation = {
    feedback,
    score
  }

  const handleTextArea = (event) => {
    setFeedback(event.target.value)
  }

  const handleScore = (event) => {
    setScore(event.target.value)
  }

  const handleSubmit = () => {
    const id = exercise.evaluation.id
    client.patch(`evaluation/${id}`, evaluation)
    alert(t('evaluation.score.alert'))
    history.back()
  }

  const isANumber = () => Number.isNaN(Number(score))

  return (
    <ScoreContainer>
      <Select
        label={t('evaluation.score.title')}
      placeholder={t('evaluation.score.placeholder')}
        onChange={handleScore}
       // required={true}
        options={[
          { label: 0, value: 0 },
          { label: 1, value: 1 },
          { label: 2, value: 2 },
          { label: 3, value: 3 },
          { label: 4, value: 4 },
          { label: 5, value: 5 }
        ]}
      ></Select>

      <textarea
        placeholder={t('evaluation.score.placeholderTextarea')}
        className="form-control"
        id="message-text"
        onChange={handleTextArea}
      >

      </textarea>

      <PrimaryButton
        text={t('evaluation.score.sendButton')}
        onClick={handleSubmit}
        disabled={isANumber() || !feedback}
      />
    </ScoreContainer>
  )
}

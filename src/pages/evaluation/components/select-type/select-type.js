import { React, useState } from 'react'
import Select from '../../../../components/select'
import { client } from '../../../../service'
import SucessButton from '../../../../components/buttons/sucess'
import { TypeContainer } from '../../styled'
import { useTranslation } from 'react-i18next'

export const Type = ({ setDisableEvaluationButton, defaultType }) => {
  const [challengeTypeSelected, setChallengeTypeSelected] = useState(false)
  const [exerciseType, setExerciseType] = useState(defaultType)
  const { t } = useTranslation()

  const id = window.location.pathname.split('/')[2]

  const handleTypeSubmit = () => {
    client.put(`/exercise/${id}`, { exerciseType })
  }

  return (

    <TypeContainer>

      <Select
        value={exerciseType}
        onChange={({ target }) => {
          setExerciseType(target.value)
          setChallengeTypeSelected(true)
        }}
        label={t('exercise.type.title')}
        placeholder={t('exercise.type.placeholder')}
        options={[
          { label: 'Backend', value: 'Backend' },
          { label: 'Frontend', value: 'Frontend' },
          { label: 'Fullstack', value: 'Fullstack' }
        ]} />

      {
        challengeTypeSelected
          ? <SucessButton text={t('exercise.type.changeButton')} onClick={() => {
            setDisableEvaluationButton(false)
            setChallengeTypeSelected(false)
            handleTypeSubmit()
            alert(t('exercise.type.alert'))
          }} />
          : null
      }

    </TypeContainer>
  )
}

import { React, useState } from 'react'
import Select from '../../../../components/select'
import { client } from '../../../../service'
import SucessButton from '../../../../components/buttons/sucess'
import { TypeContainer } from '../../styled'
import { useTranslation } from 'react-i18next'

export const Type = ({ setDisableEvaluationButton }) => {
  const [exerciseTypeSelected, setExerciseTypeSelected] = useState(false)
  const [exerciseType, setExerciseType] = useState()
  const { t } = useTranslation()

  const id = window.location.pathname.split('/')[2]

  const handleTypeSubmit = () => {
    client.patch(`exercise/${id}`, { type: exerciseType })
  }

  return (

    <TypeContainer>

      <Select
        onChange={({ target }) => {
          setExerciseType(target.value)
          setExerciseTypeSelected(true)
        }}
        label={t('evaluation.type.title')}
        placeholder={t('evaluation.type.placeholder')}
        options={[
          { label: 'Backend', value: 'Backend' },
          { label: 'Frontend', value: 'Frontend' },
          { label: 'Fullstack', value: 'Fullstack' }
        ]} />

      {
        exerciseTypeSelected
          ? <SucessButton text={t('evaluation.type.changeButton')} onClick={() => {
            setDisableEvaluationButton(false)
            setExerciseTypeSelected(false)
            handleTypeSubmit()
            alert(t('evaluation.type.alert'))
          }} />
          : null
      }

    </TypeContainer>
  )
}

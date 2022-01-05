import { React, useState } from 'react'
import Select from '../../../../components/select'

export const Type = () => {
  const [setExerciseType] = useState()
  const [setExerciseTypeSelected] = useState(false)
  const id = window.location.pathname.split('/')[2]

  const handleTypeSubmit = () => {
    client.patch(`exercise/${id}`, { type: exerciseType })
  }
  // const [setDisableEvaluationButton] = useState(true)

  return (
    <Select
      onChange={({ target }) => {
        setExerciseType(target.value)
        setExerciseTypeSelected(true)
      }}
      label="Tipo:"
      placeholder="Escolha uma opção"
      options={[
        { label: 'Backend', value: 'Backend' },
        { label: 'Frontend', value: 'Frontend' },
        { label: 'Fullstack', value: 'Fullstack' }
      ]} />

  {
    exerciseTypeSelected
      ? <SucessButton text="Alterar" onClick={() => {
        setExerciseTypeSelected(false)
        setDisableEvaluationButton(false)
        handleTypeSubmit()
        alert('Alterado com sucesso!')
      }} />
      : null
  }
      
  )
}

import Select from '../../components/select'

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

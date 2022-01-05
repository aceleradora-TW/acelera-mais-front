import { React } from 'react'
// import SucessButton from '../../../../components/buttons/sucess'
// import Select from '../../../../components/select'
// import { client } from '../../../../service'
import { Type } from '../select-type/select-type'

export const Header = () => {
  // const [exerciseType] = useState()
  // const [setExerciseTypeSelected] = useState(false)
  // const [setDisableEvaluationButton] = useState(true)

  // const id = window.location.pathname.split('/')[2]

  // const handleTypeSubmit = () => {
  //   client.patch(`exercise/${id}`, { type: exerciseType })
  // }

  return (
    <section className="head">
      <h1>Avaliação </h1>

      <Type />

    </section >
  )
}

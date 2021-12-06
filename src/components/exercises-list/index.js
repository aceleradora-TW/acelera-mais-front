import './style.css'
import { ToggleRow } from '../togglerow'

const listExercises = require('../../mocks/exercise-mock.json')

export const ExercisesList = () => {
  return (
    <div className="table-exercises">
      <table className="table-exercises-content">
        <thead className="table-exercises-head">
          <tr>
            <th>Nome </th>
            <th>Tipo </th>
            <th colSpan='2'>Avaliador </th>
            <th>Feedbacks </th>
          </tr>
        </thead>
        <tbody className="table-body">
          {listExercises.map((exercise, key) => (
            <ToggleRow key={key} item={exercise} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

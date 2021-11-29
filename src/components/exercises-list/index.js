import './style.css'
import { Status } from '../status'
import ActionButton from '../buttons/action'
import {
  faPen
} from '@fortawesome/free-solid-svg-icons'
const listExercises = require('../../mocks/exercise-mock.json')

export const ExercisesList = ({ exercise, setExercises, status }) => {
  return (
    <div className="table-exercises">
      <table className="table-exercises-content">
        <thead className="table-exercises-head">
          <tr>
            <th>Nome </th>
            <th>Tipo </th>
            <th colSpan="2">Avaliador </th>
            <th>Feedbacks </th>
          </tr>
        </thead>
        <tbody className="table-body">
          {listExercises.map((exercise, key) => (
            <tr key={`exercise=${key}`}>
              <td>{exercise.name}</td>
              <td>{exercise.type}</td>
              <Status className={status}>{exercise.evaluation.mentorName}</Status>
              <td>
                <ActionButton text='avaliar' icon={faPen} />
              </td>
              <td>{exercise.evaluation.feedback}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

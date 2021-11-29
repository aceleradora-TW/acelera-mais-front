import './style.css'
import { Status } from '../status'
import ActionButton from '../buttons/action'
import {
  faPen
} from '@fortawesome/free-solid-svg-icons'

const listExercises = require('../../mocks/exercise-mock.json')

export const ExercisesList = ({ exercise, setExercises, status }) => {
  //  padrão / inativo - branco
  // confirmação / ativo - azul
  // error / incompleto - vermelho
  // alterar / finalizado - verde
  // atenção / aguardar - amarelo

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
              <td> <Status
                status={exercise.status}
              /></td>
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

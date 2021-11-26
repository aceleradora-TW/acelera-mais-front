import './style.css'
const listExercises = require('../../mocks/exercise-mock.json')

export const ExercisesList = () => {
  return (
    <>
      <table>
        <caption>Exercícios</caption>
        <thead>
          <tr>
            <td>Nome </td>
            <td>Tipo </td>
            <td>Descrição </td>
            <td>Avaliador </td>
            <td>Feedbacks </td>
          </tr>
        </thead>
        <tbody>
          {listExercises.map((exercise, key) => (
            <tr key={`exercise=${key}`}>
              <td>{exercise.name}</td>
              <td>{exercise.type}</td>
              <td>{exercise.description}</td>
              <td>{exercise.evaluation.mentorName}</td>
              <td>{exercise.evaluation.feedback}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </>
  )
}

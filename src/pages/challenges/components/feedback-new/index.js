export const Feedback = ({ exercise, toggle }) => {
  const evaluation = exercise.evaluation
  if (!evaluation.feedback) return null
  return (
    <tr>
      <td colSpan="6" className={toggle}>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div>
            <strong>{exercise.name}</strong>
            <div>Nota: {evaluation.score}</div>
            <div>FeedBack: {evaluation.feedback} </div>
          </div>
        </div>
      </td>
    </tr>
  )
}

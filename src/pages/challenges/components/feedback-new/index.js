export const Feedback = ({ exercise, toggle }) => {
  const evaluation = exercise.evaluation
  if (!evaluation.feedback) return null
  return (
    <tr>
      <td colSpan="6" className={toggle}>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div>
            <strong>{exercise.name}</strong>
            <div>{evaluation.feedback} </div>
          </div>
        </div>
      </td>
    </tr>
  )
}

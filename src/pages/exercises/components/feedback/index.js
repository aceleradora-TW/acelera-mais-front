export const Feedback = ({ exercise, toggle }) => {
  if (!exercise) return null
  const feedbacks = exercise.evaluation.feedback
  return (
    <tr>
      <td colSpan="6" className={toggle}>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          {feedbacks.map((feedback, index) => (
            <div key={index}>
              <strong>{feedback.name}</strong>
              <div>{feedback.evaluation.feedback} </div>
            </div>
          )
          )}
        </div>
      </td>
    </tr>
  )
}

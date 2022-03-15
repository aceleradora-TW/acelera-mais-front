export const Feedback = ({ exercises, toggle }) => {
  const feedbacks = exercises.filter(exercise => exercise.evaluation.feedback)
  return (
    <tr>
      <td colSpan="6" className={toggle}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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

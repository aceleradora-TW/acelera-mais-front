export const statusEnum = {
  PREPARING: 'status-preparing',
  CLOSED: 'status-closed',
  OPENED: 'status-opened'
}

export const hasFeedback = (challenge) => {
  if (!challenge.exercises) {
    return false
  }
  return challenge.exercises.find((feed) => feed.feedback !== null)
}

export const hasMentorName = (challenge) => {
  if (!challenge.exercises) {
    return false
  }
  return challenge.exercises.find((nameMentor) => nameMentor.mentorName !== null)
}

export const wasCanceled = (challenge) => {
  if (!challenge.exercises) {
    return false
  }
  return challenge.exercises.find((name) => name.mentorName === 'cancelado')
}

export const getStatus = (challenge) => {
  if (!challenge) return statusEnum.OPENED
  if (wasCanceled(challenge)) return statusEnum.OPENED
  if (hasFeedback(challenge) && hasMentorName(challenge)) return statusEnum.CLOSED
  if (hasMentorName(challenge)) return statusEnum.PREPARING
  return statusEnum.OPENED
}

export const getStatusEvaluation = (evaluation) => {
  if (!evaluation) return statusEnum.OPENED
  const { feedback, mentorName } = evaluation
  if (mentorName === 'cancelado') return statusEnum.OPENED
  if (feedback && mentorName) return statusEnum.CLOSED
  if (mentorName) return statusEnum.PREPARING
  return statusEnum.OPENED
}

export const isClosedChallenge = (exercises) => {
  return exercises.filter((ex) => getStatusEvaluation(ex.evaluation) !== statusEnum.CLOSED).length === 0
}

export const isPreparedChallenge = (exercises, mentorNameLocal) => {
  return exercises.some((ex) => {
    return isPreparing({
      status: getStatusEvaluation(ex.evaluation),
      currentMentor: ex.evaluation.mentorName || '',
      actualMentor: mentorNameLocal
    }) === true
  })
}

export const isPrepared = ({ status }) => status === statusEnum.PREPARING

export const isOpened = ({ status }) => status === statusEnum.OPENED

export const isClosed = ({ status }) => status === statusEnum.CLOSED

export const isPreparingOrOpened = ({ status }) => isPrepared({ status }) || isOpened({ status })

export const isClosedOrPreparing = ({ status }) => isPrepared({ status }) || isClosed({ status })

export const isPreparing = ({ status, currentMentor, actualMentor }) =>
  isPrepared({ status }) && currentMentor !== actualMentor

export const getNumberChallenge = (exercises) => {
  const statusEvaluation = exercises.map(exercise => getStatusEvaluation(exercise.evaluation))
  const closed = statusEvaluation.filter(status => status === statusEnum.CLOSED).length
  return { closed, total: statusEvaluation.length }
}

/* export const getFeedback = (exercises, toggle) => {
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
} */

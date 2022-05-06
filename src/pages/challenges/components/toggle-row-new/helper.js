export const statusEnum = {
  PREPARING: 'status-preparing',
  CLOSED: 'status-closed',
  OPENED: 'status-opened'
}

export const hasFeedback = (challenge) => {
  if (!challenge) {
    return false
  }
  return challenge.evaluation.feedback !== null
}

export const hasMentorName = (challenge) => {
  if (!challenge) {
    return false
  }
  return challenge.evaluation.mentorName !== null
}

export const wasCanceled = (challenge) => {
  if (!challenge) {
    return false
  }
  return challenge.evaluation.mentorName === 'cancelado'
}

export const getStatus = (challenge) => {
  if (!challenge) return statusEnum.OPENED
  if (wasCanceled(challenge)) return statusEnum.OPENED
  if (hasFeedback(challenge) && hasMentorName(challenge)) return statusEnum.CLOSED
  if (hasMentorName(challenge)) return statusEnum.PREPARING
  return statusEnum.OPENED
}

/* export const getStatusEvaluation = (evaluation) => {
  if (!evaluation) return statusEnum.OPENED
  const { feedback, mentorName } = evaluation
  if (mentorName === 'cancelado') return statusEnum.OPENED
  if (feedback && mentorName) return statusEnum.CLOSED
  if (mentorName) return statusEnum.PREPARING
  return statusEnum.OPENED
} */

export const isClosedChallenge = (exercise) => {
  console.log(getStatus(exercise))
  return getStatus(exercise) !== statusEnum.CLOSED
}

export const isPreparedChallenge = (exercise, mentorNameLocal) => {
  console.log(getStatus(exercise))
  return isPreparing({
    status: getStatus(exercise),
    currentMentor: exercise.mentorName || '',
    actualMentor: mentorNameLocal
  }) === true
}

export const isPrepared = ({ status }) => status === statusEnum.PREPARING

export const isOpened = ({ status }) => status === statusEnum.OPENED

export const isClosed = ({ status }) => status === statusEnum.CLOSED

export const isPreparingOrOpened = ({ status }) => isPrepared({ status }) || isOpened({ status })

export const isClosedOrPreparing = ({ status }) => isPrepared({ status }) || isClosed({ status })

export const isPreparing = ({ status, currentMentor, actualMentor }) =>
  isPrepared({ status }) && currentMentor !== actualMentor

export const getNumberChallenge = (exercises) => {
  const statusEvaluation = exercises.map(exercise => getStatus(exercise))
  const closed = statusEvaluation.filter(status => status === statusEnum.CLOSED).length
  return { closed, total: statusEvaluation.length }
}

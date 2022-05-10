const mapExercises = exercises => {
  return exercises.map(exercise => {
    return {
      idExercise: exercise.id,
      evaluation: {
        id: exercise.evaluation.id,
        mentorName: exercise.evaluation.mentorName,
        feedback: exercise.evaluation.feedback,
        score: exercise.evaluation.score
      },
      name: exercise.name,
      typeExercise: exercise.type,
      link: exercise.link
    }
  })
}
export const challengesAdapter = (challenges) => {
  console.log(challenges.map(c => {
    const { id, type, exercises } = c
    const exercisesMapped = mapExercises(exercises)
    return { id, type, exercisesMapped }
  }))
}

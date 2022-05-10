export const challengesAdapter = (challenges) => {
  return challenges.map(challenge => {
    console.log(challenge)
    return {
      id: challenge.id
    }
  })
}

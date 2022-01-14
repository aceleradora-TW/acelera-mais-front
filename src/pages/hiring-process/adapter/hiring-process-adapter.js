export const hiringProcessAdapter = (hiringProcesses) => {
  return hiringProcesses.map(h => ({
    name: h.name,
    email: h.addressEmail,
    phone: h.phone,
    birthDate: h.candidate.birthDate,
    genre: h.candidate.genre || '',
    skinColor: h.candidate.skinColor || '',
    instituitionName: h.candidate.instituitionName || '',
    courseName: h.candidate.courseName || '',
    milestone: h.candidate.milestone || '',
    howFound: h.candidate.howFound || '',
    expectation: h.candidate.expectation || '',
    motivation: h.candidate.motivation || '',
    curriculum: h.candidate.curriculum || '',
    okCI: h.candidate.okCI || '',
    exercise: h.exercise,
    fileType: h.fileType,
    zip: h.zip,
    github: h.github,
    haveComputer: h.haveComputer,
    haveInternet: h.haveInternet,
    haveWebcam: h.haveWebcam,
    canUseWebcam: h.canUseWebcam,
    cityState: h.cityState,
    createdAt: h.evaluation.createdAt,
    feedback: h.evaluation.feedback || '',
    mentorName: h.evaluation.mentorName || '',
    score: h.evaluation.score || '',
    updateAt: h.evaluation.updateAt || ''
  }))
}

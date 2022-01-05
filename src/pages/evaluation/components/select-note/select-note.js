import { React, useState } from 'react'
import Select from '../../../../components/select'
import { client } from '../../../../service'
import PrimaryButton from '../../../../components/buttons/primary'

export const Score = ({ exercise }) => {
  const [feedback, setFeedback] = useState('')
  const [score, setScore] = useState('')

  const evaluation = {
    feedback,
    score
  }

  const handleTextArea = (event) => {
    setFeedback(event.target.value)
  }

  const handleScore = (event) => {
    setScore(event.target.value)
  }

  const handleSubmit = () => {
    const id = exercise.evaluation.id
    client.patch(`evaluation/${id}`, evaluation)
    alert('Atualizado com sucesso!')
    history.back()
  }

  return (
    <div className="form-group">
      < Select
        label="Nota:"
        placeholder="Escolha uma nota"
        onChange={handleScore}
        options={
          [
            { label: 0, value: 0 },
            { label: 1, value: 1 },
            { label: 2, value: 2 },
            { label: 3, value: 3 },
            { label: 4, value: 4 },
            { label: 5, value: 5 }
          ]} ></Select >

      <textarea label="mensagem" className="form-control" id="message-text" onChange={handleTextArea} ></textarea>
      <PrimaryButton text="Enviar avaliação" onClick={handleSubmit} />
    </div>
  )
}

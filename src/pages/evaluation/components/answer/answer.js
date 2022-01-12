import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { StyledAnswer } from '../../styled'

export const Answer = ({ exercise }) => {
  return (
    <StyledAnswer>

      <h2>Respostas enviadas:</h2>
      <div>
        {exercise.zip && <a className="button-default" href={exercise.zip} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLink} /> Download zip</a>}
        {exercise.github && <a className="button-default" href={exercise.github} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faCodeBranch} /> Link do repositório</a>}
      </div>

    </StyledAnswer >
  )
}

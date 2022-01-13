import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { Anchor, Subtitle } from '../../styled'

export const Answer = ({ exercise }) => {
  return (
    <div className="answer" >
      <Subtitle>Respostas enviadas:</Subtitle>
      <div>
        {exercise.zip && <Anchor href={exercise.zip} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLink} /> Download zip</Anchor>}
        {exercise.github && <Anchor href={exercise.github} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faCodeBranch} /> Link do repositório</Anchor>}
      </div>
    </div >
  )
}

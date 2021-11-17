import Button from '../../button'
import './delete.css'

const DeleteButton = ({ icon, onClick, text, type }) => {
  return (
    < Button icon={icon} onClick={onClick} text={text} type={type} classe="button-exclude" />
  )
}

export default DeleteButton

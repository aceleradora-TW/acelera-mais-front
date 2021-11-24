import Button from '../../button'
import './action.css'

const ActionButton = ({ icon, onClick, text, type }) => {
  return (
    < Button icon={icon} onClick={onClick} text={text} type={type} classe="button-action" />
  )
}

export default ActionButton

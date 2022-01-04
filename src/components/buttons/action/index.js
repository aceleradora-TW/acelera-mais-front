import Button from '../button'
import './action.css'

const ActionButton = ({ icon, onClick, text, type, disabled = false }) => {
  return (
    < Button icon={icon} onClick={onClick} text={text} type={type} classe="button-action" disabled={disabled} />
  )
}

export default ActionButton

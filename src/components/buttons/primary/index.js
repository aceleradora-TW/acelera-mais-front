import Button from '../../button'
import './primary.css'

const PrimaryButton = ({ icon, onClick, text, type, disabled = false }) => {
  return (
    < Button icon={icon} onClick={onClick} text={text} type={type} classe="button-primary" disabled={disabled} />
  )
}

export default PrimaryButton

import Button from '../../button'
import './primary.css'

const PrimaryButton = ({ icon, classe, onClick, text, type, disabled = false }) => {
  return (
    < Button icon={icon} onClick={onClick} text={text} type={type} classe={classe} disabled={disabled} />
  )
}

export default PrimaryButton

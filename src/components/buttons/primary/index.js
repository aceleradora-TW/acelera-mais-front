import Button from '../../button'
import './primary.css'

const PrimaryButton = ({ icon, onClick, text, type }) => {
  return (
    < Button icon={icon} onClick={onClick} text={text} type={type} classe="button-primary" />
  )
}

export default PrimaryButton

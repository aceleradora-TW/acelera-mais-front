import Icon from '../../icon'
import { ButtonComponent } from './styled'

const Button = ({ icon, onClick, text, className, type, disabled = false }) => {
  return (
    <ButtonComponent className={className} type={type} onClick={onClick} disabled={disabled}>{text} <Icon icon={icon} /> </ButtonComponent>
  )
}

export default Button

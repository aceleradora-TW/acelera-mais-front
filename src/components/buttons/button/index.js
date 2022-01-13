import Icon from '../../icon'
import { ButtonComponent } from './styled'

const Button = ({ icon, onClick, text, classe, type, disabled = false }) => {
  return (
    <ButtonComponent className={classe} type={type} onClick={onClick} disabled={disabled}>{text} <Icon icon={icon} /> </ButtonComponent>
  )
}

export default Button

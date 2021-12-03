import Icon from '../icon'
import './button.css'

const Button = ({ icon, onClick, text, classe, type, disabled = false }) => {
  return (
    <button className={classe} type={type} onClick={onClick} disabled={disabled}>{text} <Icon icon={icon} /> </button>
  )
}

export default Button

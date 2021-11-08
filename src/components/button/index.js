import Icon from '../icon'
import './button.css'

const Button = ({ icon, onClick, text, classe }) => {
  return (
    <button className={classe} onClick={onClick}>{text} <Icon icon={icon} /> </button>
  )
}

export default Button

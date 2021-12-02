import Icon from '../icon'
import './button.css'

const Button = ({ id, icon, onClick, text, classe, type }) => {
  return (
    <button id={id} className={classe} type={type} onClick={onClick}>{text} <Icon icon={icon} /> </button>
  )
}

export default Button

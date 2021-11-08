import Icon from '../icon'
import './button.css'

const Button = ({ icon, onClick, text, classe, type }) => {
  return (
    <button className={classe} type={type} onClick={onClick}>{text} <Icon icon={icon} /> </button>
  )
}

export default Button

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './button.css'

const Button = ({ icon, onClick, text, classe }) => {
  return (
    <button className={classe} onClick={onClick}>{text} <FontAwesomeIcon icon={icon} /> </button>
  )
}

export default Button

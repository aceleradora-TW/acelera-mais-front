import Button from '../../button'
import './sucess.css'

const SucessButton = ({ icon, onClick, text, type }) => {
  return (
    < Button icon={icon} onClick={onClick} text={text} type={type} classe="button-sucess" />
  )
}

export default SucessButton

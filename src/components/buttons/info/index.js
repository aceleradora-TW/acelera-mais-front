import Button from '../../button'
import './info.css'

const InfoButton = ({ icon, onClick, text, type }) => {
  return (
    < Button icon={icon} onClick={onClick} text={text} type={type} classe="button-info" />
  )
}

export default InfoButton

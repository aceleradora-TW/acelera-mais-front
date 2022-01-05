import Button from '../button'
import './default.css'

const DefaultButton = ({ icon, onClick, text, type }) => {
  return (
    <Button icon={icon} onClick={onClick} text={text} type={type} classe="button default" />
  )
}

export default DefaultButton

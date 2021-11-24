import Button from '../../button'
import './select.css'

const selectButton = ({ icon, onClick, text, type }) => {
  return (
    < Button icon={icon} onClick={onClick} text={text} type={type} classe="button-select" />
  )
}

export default selectButton

import Button from '../../button'
import './info.css'

const info = ({ icon, onClick, text, type }) => {
  return (
    <Button classe="button-info" type={type} onClick={onClick} text={text} icon={icon} />
  )
}

export default info

import Button from '../../button'
import './edit.css'

const Edit = ({ icon, onClick, text, type }) => {
  return (
    <Button classe= "button-default" type={type} onClick={onClick} text={text} icon={icon} />
  )
}

export default Edit

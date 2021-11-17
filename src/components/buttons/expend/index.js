import Button from '../../button'
import './expend.css'

const ExpendButton = ({ icon, onClick, text, type }) => {
  return (
    <Button className="button-expen" type={type} onClick={onClick} text={text} />
  )
}

export default ExpendButton

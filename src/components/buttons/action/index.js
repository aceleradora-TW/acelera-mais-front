import Button from '../button'

const ActionButton = ({ icon, onClick, text, type, disabled = false }) => {
  return (
    <Button icon={icon} onClick={onClick} text={text} type={type} className="action" disabled={disabled} />
  )
}

export default ActionButton

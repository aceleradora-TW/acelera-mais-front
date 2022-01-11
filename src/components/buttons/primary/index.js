import Button from '../button'

const PrimaryButton = ({ icon, onClick, text, type, disabled = false }) => {
  return (
    <Button icon={icon} onClick={onClick} text={text} type={type} classe='primary' disabled={disabled} />
  )
}

export default PrimaryButton

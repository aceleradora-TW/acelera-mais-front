import Button from '../button'

const PrimaryButton = ({ icon, onClick, text, type, disabled = false }) => {
  return (
    <Button icon={icon} onClick={onClick} text={text} type={type} className='primary' disabled={disabled} />
  )
}

export default PrimaryButton

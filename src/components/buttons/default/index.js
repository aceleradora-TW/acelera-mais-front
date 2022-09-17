import Button from '../button'

const DefaultButton = ({ icon, onClick, text, type }) => {
  return (
    <Button icon={icon} onClick={onClick} text={text} type={type} className="default" />
  )
}

export default DefaultButton

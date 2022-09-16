import Button from '../button'

const info = ({ icon, onClick, text, type }) => {
  return (
    <Button className="info" type={type} onClick={onClick} text={text} icon={icon} />
  )
}

export default info

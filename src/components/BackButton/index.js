import Button from '../buttons/button'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const BackButton = ({ icon, className }) => {
  const navigate = useNavigate()
  return (
    <Button icon={icon || faReply} onClick={() => navigate(-1)} className={className} />
  )
}

export default BackButton

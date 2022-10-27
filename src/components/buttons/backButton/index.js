import Button from '../button/index'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export const BackButton = ({ className }) => {
  const navigate = useNavigate()
  return (
    <Button icon={faReply} onClick={() => navigate(-1)} className={className} />
  )
}

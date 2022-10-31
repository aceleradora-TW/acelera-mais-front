import Button from '../button/index'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation } from 'react-router-dom'

export const BackButton = ({ className }) => {
  const navigate = useNavigate()

  const isVisibleForPath = () => {
    const { pathname } = useLocation()
    const notVisiblePaths = ['home', 'user/change-password']
    return notVisiblePaths.some(notVisiblePath => pathname.includes(notVisiblePath))
  }

  return (
    !isVisibleForPath() &&
    <Button icon={faReply} onClick={() => navigate(-1)} className={className} />
  )
}

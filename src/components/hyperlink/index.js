import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const Links = ({ link, label, icon }) => {
  return (
    <Link to={link} >{label}
      {icon ? < FontAwesomeIcon icon={icon} /> : null}
    </Link>
  )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon }) => {
  if (icon) {
    return (<FontAwesomeIcon icon={icon} />)
  }
  return null
}

export default Icon

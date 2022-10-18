import Button from '../buttons/button'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import {} from 'react-router'
const goBack = () => {
  window.history.back()
}
const PreventPage = ({ icon, className }) => {
  return (
    <Button icon={icon || faReply} onClick={goBack} className={className} />
  )
}

export default PreventPage

import DefaultButton from '../buttons/default'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
// import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

export const Logout = () => {
  // const { t } = useTranslation()
  const navigate = useNavigate()
  const handleClick = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <DefaultButton icon={faDoorOpen} onClick={handleClick} />
  )
}

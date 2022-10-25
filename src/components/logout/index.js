import DefaultButton from '../buttons/default'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
// import { HeaderContainer } from '../../pages/evaluation/styled'
import { HeaderComponent } from './styled'

export const Logout = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const handleClick = () => {
    if (confirm(t('messageLogout.confirm')) === true) {
      localStorage.removeItem('token')
      navigate('/')
    }
  }

  return (
    <HeaderComponent>
      <DefaultButton icon={faDoorOpen} onClick={handleClick} />
    </HeaderComponent>
  )
}

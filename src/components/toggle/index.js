import { useState } from 'react'
import { ButtonEnabled, ButtonDisabled } from './styled'
import { useTranslation } from 'react-i18next'
import { client } from '../../service'

export const ToggleButton = ({
  label = {
    on: 'On',
    off: 'Off'
  }, id
}) => {
  const [isChecked, setChecked] = useState(true)
  const { t } = useTranslation()

  const alert = async (msg) => {
    if (confirm(msg)) {
      setChecked((prevState) => !prevState)
      const user = {
        flag: isChecked ? 'user-enabled' : 'user-disabled'
      }
      await client.put(`/user/${id}`, user)
    }
  }
  const change = () => {
    const word = isChecked ? t('user.toggle.on') : t('user.toggle.off')
    alert(t('user.toggle.alert.message', { value: word.toLowerCase() }))
  }

  return (
    <div onClick={change}>
      <span>{isChecked ? <ButtonEnabled>{t('user.toggle.on')}</ButtonEnabled> : <ButtonDisabled>{t('user.toggle.off')}</ButtonDisabled>}</span>
    </div>
  )
}

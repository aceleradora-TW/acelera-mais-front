import { useState } from 'react'
import { ButtonEnabled, ButtonDisabled } from './styled'
import { useTranslation } from 'react-i18next'
import { client } from '../../service'

const isEnabled = flag => flag === 'user-enabled'

export const ToggleButton = ({
  label = {
    on: 'On',
    off: 'Off'
  }, id, flag
}) => {
  const [isChecked, setChecked] = useState(isEnabled(flag))
  const { t } = useTranslation()

  const alert = async (msg) => {
    if (confirm(msg)) {
      setChecked((prevState) => !prevState)
      const user = {
        flag: isChecked ? 'user-disabled' : 'user-enabled'
      }
      await client.put(`/user/${id}`, user)
    }
  }
  const change = () => {
    const word = isChecked ? t('user.toggle.off') : t('user.toggle.on')
    alert(t('user.toggle.alert.message', { value: word.toLowerCase() }))
  }

  return (
    <div >
      {isChecked ? <ButtonDisabled onClick={change} >{t('user.toggle.off')}</ButtonDisabled> : <ButtonEnabled onClick={change} >{t('user.toggle.on')}</ButtonEnabled>}
    </div>
  )
}

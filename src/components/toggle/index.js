import { useEffect, useState } from 'react'
import { ButtonEnabled, ButtonDisabled } from './styled'
import { useTranslation } from 'react-i18next'
import { client } from '../../service'

export const ToggleButton = ({
  label = {
    on: 'On',
    off: 'Off'
  }, id, flag
}) => {
  console.log(flag + id)
  const [isChecked, setChecked] = useState()
  const { t } = useTranslation()
  useEffect(() => {
    if (flag === 'user-disabled') {
      setChecked(false)
    } else if (flag === 'user-enabled') {
      setChecked(true)
    }
  }, [])

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
    <div onClick={change}>
      <span>{isChecked ? <ButtonDisabled>{t('user.toggle.off')}</ButtonDisabled> : <ButtonEnabled>{t('user.toggle.on')}</ButtonEnabled>}</span>
    </div>
  )
}

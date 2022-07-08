import { useState } from 'react'
import { ButtonEnabled, ButtonDisabled } from './styled'
import { useTranslation } from 'react-i18next'

export const ToggleButton = ({
  label = {
    on: 'toggleButton.on',
    off: 'toggleButton.off'
  }, click, status
}) => {
  const [checked, setChecked] = useState(status)
  const { t } = useTranslation()

  const handleClick = () => {
    click(checked, setChecked)
  }

  return (
    <div >
      {checked
        ? <ButtonDisabled onClick={handleClick} >{t(label.off)}</ButtonDisabled>
        : <ButtonEnabled onClick={handleClick} >{t(label.on)}</ButtonEnabled>}
    </div>
  )
}

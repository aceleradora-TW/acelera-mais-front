import { useState } from 'react'
import { ButtonEnabled, ButtonDisabled } from './styled'

export const ToggleButton = ({
  label = {
    on: 'On',
    off: 'Off',
    flag: 'user-enabled'
  }
}) => {
  const [isChecked, setChecked] = useState(true)

  console.log('is checked', isChecked)

  const change = () => {
    if (isChecked === true) {
      setChecked(confirm('Tem certeza que deseja habilitar essa mentora?'))
      if (isChecked === true) {
        setChecked((prevState) => !prevState)
      }
    } else {
      setChecked(confirm('Tem certeza que deseja desabilitar essa mentora?'))
      if (isChecked === true) {
        setChecked((prevState) => !prevState)
      }
    }
  }

  return (
    <div onClick={change}>
      <span>{isChecked ? <ButtonEnabled>Habilitar</ButtonEnabled> : <ButtonDisabled>Desabilitar</ButtonDisabled>}</span>
    </div>
  )
}

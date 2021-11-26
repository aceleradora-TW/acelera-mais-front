import React, { useState } from 'react'
import Icon from '../icon'
import './style.css'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

export const ToggleRow = ({ item }) => {
  if (item.length > 150) {
    console.log('olá')
  }
  const [checked, setChecked] = useState(false)

  const aberto = checked ? 'toggleRow' : 'toggleRow toggleRowChecked'

  const fechado = checked ? 'toggleRows' : 'toggleRows toggleRowCheckeds'

  return (
    <table>
      <tbody>
        <tr>
          <td id='botao' className={aberto} onClick={() => setChecked(!checked)}>
            <Icon icon={faAngleUp} />
          </td>
        </tr>
        <tr>
          <td className={fechado}>
            Feedback:
            <p>{item}</p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

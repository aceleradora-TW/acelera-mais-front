import React, { useState } from 'react'
import Icon from '../icon'
import './style.css'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

export const ToggleRow = ({ item }) => {
  const [checked, setChecked] = useState(false)

  const aberto = checked ? 'toggleRow' : 'toggleRow toggleRowChecked'

  const fechado = checked ? 'toggleRows' : 'toggleRows toggleRowCheckeds'

  return (
    <table>

      <td className={aberto} onClick={() => setChecked(!checked)}>
        <Icon icon={faAngleUp}/>
      </td>

      <td className={fechado}>
        <tr>
          <strong>Feedback:</strong>
          <p>{ item }</p>
        </tr>
      </td>

    </table>
  )
}
import React, { useState } from 'react'
import Icon from '../icon'
import './style.css'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

export const ToggleRow = ({ item }) => {
  const [checked, setChecked] = useState(false)
  // const style = checked ? 'toggle' : 'toggle'
  return (
    <div className='toggleRow' onClick={() => setChecked(!checked)}>
        <Icon icon={faAngleUp}/>{JSON.stringify(checked)}
    </div>
  )
}

import { useState } from 'react'
import './style.css'
import Button from '../buttons/button'
import {
  faTimes
} from '@fortawesome/free-solid-svg-icons'

export const Modal = ({ title, children, label, callback, icon, classe, text, reminder, disabled }) => {
  const [show, setShow] = useState(false)

  const onClose = () => {
    setShow(false)
    if (callback) {
      callback()
    }
  }

  if (!show) {
    return <Button disabled={disabled} icon={icon} classe={classe} text={text} onClick={() => setShow(true)}>{label}</Button>
  }

  return (
    <>
      <Button icon={icon} classe={classe} text={text}>{label}</Button>
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>

            <Button icon={faTimes}
              classe="close"
              onClick={onClose}
            />
          </div>
          <p className="modal-reminder">{reminder}</p>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </>
  )
}

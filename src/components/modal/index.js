import { useState } from 'react'
import './style.css'
import Button from '../button'
import {
  faTimes
} from '@fortawesome/free-solid-svg-icons'

export const Modal = ({ title, children, label, icon, classe, text, reminder }) => {
  const [show, setShow] = useState(false)

  const onClose = () => setShow(false)

  if (!show) {
    return <Button icon={icon} classe={classe} text={text} onClick={() => setShow(true)}>{label}</Button>
  }

  return (
    <>
      <Button icon={icon} classe={classe} text={text}>{label}</Button>
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>

            <Button icon={faTimes}
              classe="button-close"
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

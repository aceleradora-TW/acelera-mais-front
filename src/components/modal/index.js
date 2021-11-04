import { useState } from 'react'
import './style.css'
import Button from '../button'
import {
  faTimes
} from '@fortawesome/free-solid-svg-icons'

export const Modal = ({ title, children, label, icon }) => {
  const [show, setShow] = useState(false)

  const onClose = () => setShow(false)

  if (!show) {
    return <Button icon={icon} classe='button-edit' text="Editar" onClick={() => setShow(true)}>{label}</Button>
  }

  return (
    <>
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <Button icon={faTimes}
              classe="button-close"
              onClick={onClose}
            />
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </>
  )
}

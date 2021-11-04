import { useState } from 'react'
import './style.css'
import Button from '../button'

export const Modal = ({ title, children, className, label, icon }) => {
  const [show, setShow] = useState(false)

  const onClose = () => setShow(false)

  if (!show) {
    return <Button icon={icon} className={className} onClick={() => setShow(true)}>{label}</Button>
  }

  return (
    <>
      <Button className={className}>{label}</Button>
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </>
  )
}

import { useState } from 'react'
import './style.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Modal = ({ title, children, className, label }) => {
  const [show, setShow] = useState(false)

  const onClose = () => setShow(false)

  if (!show) {
    return <button className={className} onClick={() => setShow(true)}>{label}</button>
  }

  return (
    <>
      <button className={className}>{label}</button>
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <div>
              <button icon={faTrash}
                classe="button-delete">Excluir</button>
            </div>
            <div className="modal-options">
              <button onClick={onClose}>
                Cancelar
              </button>
              <button>Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal

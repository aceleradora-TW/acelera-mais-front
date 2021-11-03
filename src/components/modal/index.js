import { useState } from 'react'
import './style.css'
import Button from '../button'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'

export const Modal = ({ title, children, className, label, method = 'PATCH', id = '' }) => {
  const [show, setShow] = useState(false)

  const onClose = () => setShow(false)

  if (!show) {
    return <button className={className} onClick={() => setShow(true)}>{label}</button>
  }

  const saveHiringProcess = () => {
    const data = { name: '', description: '', startDate: '', endDate: '' }

    axios(`https://prod-acelera-mais-api.herokuapp.com/hiring_process/${id}`,
      {
        method,
        data
      })
      .then(res => console.log(res.data)).catch((err) => { console.error('Errou' + err) })
  }

  const deleteHiringProcess = () => {
    const data = { name: '', description: '', startDate: '', endDate: '' }

    axios(`https://prod-acelera-mais-api.herokuapp.com/hiring_process/${id}`,
      {
        method,
        data
      })
      .then(res => console.log(res.data)).catch((err) => { console.error('Errou' + err) })
  }

  /* const confirmDelete = () => {
    let x
    let r = confirm('Escolha um valor!')
    if (r === true) {
      x = 'você pressionou OK!'
    } else {
      x = 'Você pressionou Cancelar!'
    }
  } */

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
              <Button onClick={deleteHiringProcess} icon={faTrashAlt}
                classe="button-delete">Excluir</Button>
            </div>
            <div className="modal-options">
              <button onClick={onClose}>
                Cancelar
              </button>
              <button onClick={saveHiringProcess}>Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

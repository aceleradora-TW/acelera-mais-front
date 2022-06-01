import { client } from '../../../../service'
import { useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Modal } from '../../../../components/modal'
import { InputText } from '../../../../components/inputs/text'
import PrimaryButton from '../../../../components/buttons/primary'
import { InputEmail } from '../../../../components/inputs/email'
import { InputTelephone } from '../../../../components/inputs/telephone'

export const RegisterModal = ({ method = 'POST', callback = () => { } }) => {
  const [users, setUsers] = useState({
    name: '',
    telephone: '',
    email: '',
    type: 'evaluator',
    password: '',
    flag: 'first-login'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUsers({ ...users, [name]: value })
  }

  const sendUsers = () => {
    const data = users

    client('/user', { method, data })
      .then(res => {
        console.log(res.data)
        alert(res.data.message)
        callback(res.data)
      })
  }

  return (
    <div>
      <Modal
        icon={faPlus}
        label="Importar"
        title='Cadastrar nova mentora'
        classe='button primary'
        text='Cadastrar uma nova mentora'
      >
        <InputText name='name' label={'Nome'} onChange={handleChange} />
        <InputTelephone name='telephone' label={'Telefone'} onChange={handleChange} />
        <InputEmail name='email' label={'Email'} onChange={handleChange} />
        <PrimaryButton text='Cadastrar' onClick={sendUsers} />
      </Modal>

    </div>
  )
}

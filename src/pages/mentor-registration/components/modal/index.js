import { client } from '../../../../service'
import { useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Modal } from '../../../../components/modal'
import { InputText } from '../../../../components/inputs/text'
import PrimaryButton from '../../../../components/buttons/primary'

export const RegisterModal = ({ method = 'POST', callback = () => { } }) => {
  const [users, setUsers] = useState({
    name: '',
    email: '',
    telephone: '',
    type: '',
    password: ''
  })

  const handleChange = (e) => {
    // const { name } = e.target
    setUsers({
      ...users

    })
  }

  const sendUsers = () => {
    const data = users

    client('/user',

      {
        method,
        data
      })
      .then(res => {
        console.log(res.data)
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
        <InputText name='telephone' label={'Telefone'} onChange={handleChange} />
        <InputText name='email' label={'Email'} onChange={handleChange} />
        <PrimaryButton text='Cadastrar' onClick={sendUsers} />
      </Modal>

    </div>
  )
}

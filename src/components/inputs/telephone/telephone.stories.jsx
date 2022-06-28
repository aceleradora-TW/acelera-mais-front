import { InputTelephone } from '.'

export default {
  title: 'General Components/Inputs/InputTelephone',
  component: InputTelephone
}

const Template = args => <InputTelephone {...args} />

export const Telephone = Template.bind({})

Telephone.args = {
  onChange: () => { },
  label: 'Telefone',
  name: 'telefone'
}

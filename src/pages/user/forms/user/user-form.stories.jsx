import { UserForm } from '.'

// configuração da aba do componente na pagina do storybook
export default {
  title: 'UserForm',
  component: UserForm
}

const Template = args => <UserForm {...args} />

export const UserFormTemplate = Template.bind({})

UserFormTemplate.args = {
  method: 'POST',
  id: '',
  batata: true
}

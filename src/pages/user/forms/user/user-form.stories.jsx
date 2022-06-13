import { UserForm } from '.'

// configuração da aba do componente na pagina do storybook
export default {
  title: 'UserForm',
  component: UserForm
}

const Template = args => <UserForm {...args} />

export const UserTemplateForm = Template.bind({})

UserTemplateForm.args = {
  method: 'POST',
  id: ''
}

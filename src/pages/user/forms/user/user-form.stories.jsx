import { UserForm } from '.'

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

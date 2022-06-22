import { InputEmail } from '.'

export default {
  title: 'General Components/Inputs/InputEmail',
  component: InputEmail
}

const Template = args => <InputEmail {...args} />

export const Email = Template.bind({})
Email.args = {
  label: 'Email',
  name: 'email'
}

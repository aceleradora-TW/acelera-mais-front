import { InputEmail } from '.'

export default {
  title: 'InputEmail',
  component: InputEmail
}

const Template = args => <InputEmail {...args} />

export const Email = Template.bind({})
Email.args = {
  label: 'Email',
  name: 'email'
}

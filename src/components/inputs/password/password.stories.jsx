import { InputPassword } from '.'

export default {
  title: 'InputPassword',
  component: InputPassword
}

const Template = args => <InputPassword {...args} />

export const Password = Template.bind({})

Password.args = {
  label: 'Password',
  onChange: () => { },
  name: 'password'
}

import { Login } from '.'

export default {
  title: 'Login',
  component: Login
}

const Template = args => <Login {...args} />

export const loginInput = Template.bind({})

loginInput.args = {
  label: 'Login',
  onChange: () => { },
  name: 'Login'
}

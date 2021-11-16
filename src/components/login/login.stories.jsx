import { Login } from '.'

export default {
  title: 'Login',
  component: Login
}

const Template = args => <Login {...args} />

export const LoginInput = Template.bind({})

LoginInput.args = {
  label: 'Login',
  onChange: () => { },
  name: 'Login'

}

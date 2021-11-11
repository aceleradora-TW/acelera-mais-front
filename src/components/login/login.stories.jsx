import { Login } from '.'

export default {
  title: 'Login',
  component: Login
}

const Template = args => <Login {...args} />

export const Logininput = Template.bind({})

Date.args = {
  label: 'Login',
  onChange: () => { },
  name: 'Login-input'

}

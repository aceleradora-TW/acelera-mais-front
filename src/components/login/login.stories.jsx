import { Login } from '.'

export default {
  title: 'Login',
  component: Login
}

const Template = args => <Login {...args} />

<<<<<<< HEAD
export const Logininput = Template.bind({})

Date.args = {
  label: 'Login',
  onChange: () => { },
  name: 'Login-input'

=======
export const loginInput = Template.bind({})

loginInput.args = {
  label: 'Login',
  onChange: () => { },
  name: 'Login'
>>>>>>> 3c8129c40a4365d7f47091c14905f67ce88e2bf7
}

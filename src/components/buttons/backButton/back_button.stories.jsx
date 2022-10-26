import Button from './../button/index'
import { faReply } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'General Components/Buttons/backButton',
  component: Button
}

const Template = args => <Button {...args} />

export const BackButton = Template.bind({})

BackButton.args = {
  icon: faReply,
  text: '',
  disabled: false
}

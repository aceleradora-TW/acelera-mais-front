import Button from '.'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'ActionButton',
  component: Button
}

const Template = args => <Button {...args} />

export const ActionButton = Template.bind({})
export const ActionButtonIcon = Template.bind({})

ActionButton.args = {
  icon: null,
  onClick: () => { },
  text: 'Action Button',
  disabled: false
}

ActionButtonIcon.args = {
  icon: faPlus,
  onClick: () => { },
  text: 'Action Button with Icon',
  disabled: false
}

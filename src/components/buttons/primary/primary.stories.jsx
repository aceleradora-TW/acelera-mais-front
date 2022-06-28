import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from '.'

export default {
  title: 'General Components/Buttons/PrimaryButton',
  component: Button
}

const Template = args => <Button {...args} />

export const PrimaryButton = Template.bind({})
export const PrimaryButtonIcon = Template.bind({})

PrimaryButton.args = {
  icon: null,
  onClick: () => { },
  text: 'Primary Button',
  disabled: false
}

PrimaryButtonIcon.args = {
  icon: faPlus,
  onClick: () => { },
  text: 'Primary Button with Icon',
  disabled: false
}

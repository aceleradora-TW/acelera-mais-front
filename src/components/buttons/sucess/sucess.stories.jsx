import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from '.'

export default {
  title: 'Secondary',
  component: Button
}

const Template = args => <Button {...args} />

export const SecondaryButton = Template.bind({})
export const SecondaryButtonIcon = Template.bind({})

SecondaryButton.args = {
  icon: null,
  onClick: () => { },
  text: 'Secondary Button',
  disabled: false
}

SecondaryButtonIcon.args = {
  icon: faPlus,
  onClick: () => { },
  text: 'Secondary Button with Icon',
  disabled: false
}

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from '.'

export default {
  title: 'DefaultButton',
  component: Button
}

const Template = args => <Button {...args} />

export const DefaultButton = Template.bind({})
export const DefaultButtonIcon = Template.bind({})

DefaultButton.args = {
  icon: null,
  onClick: () => { },
  text: 'Default Button',
  disabled: false
}

DefaultButtonIcon.args = {
  icon: faPlus,
  text: 'Default Button with Icon',
  disabled: false
}

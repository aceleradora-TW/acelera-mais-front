import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from '.'

export default {
  title: 'General Components/Buttons/InfoButton',
  component: Button
}

const Template = args => <Button {...args} />

export const ButtonInfo = Template.bind({})
export const ButtonInfoIcon = Template.bind({})

ButtonInfo.args = {
  icon: null,
  onClick: () => { },
  text: 'InfoButton',
  disabled: false
}

ButtonInfoIcon.args = {
  icon: faPlus,
  onClick: () => { },
  text: 'InfoButton with Icon',
  disabled: false
}

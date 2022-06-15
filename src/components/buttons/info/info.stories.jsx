import Button from '.'

export default {
  title: 'General Components/Buttons/InfoButton',
  component: Button
}

const Template = args => <Button {...args} />

export const ButtonInfo = Template.bind({})

ButtonInfo.args = {
  icon: null,
  onClick: () => { },
  text: 'InfoButton'
}

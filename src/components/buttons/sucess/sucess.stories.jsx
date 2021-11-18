import Button from '.'

export default {
  title: 'SucessButton',
  component: Button
}

const Template = args => <Button {...args} />

export const SucessButton = Template.bind({})

SucessButton.args = {
  icon: null,
  onClick: () => { },
  text: 'SucessButton'
}

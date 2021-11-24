import Button from '.'

export default {
  title: 'PrimaryButton',
  component: Button
}

const Template = args => <Button {...args} />

export const PrimaryButton = Template.bind({})

PrimaryButton.args = {
  icon: null,
  onClick: () => { },
  text: 'Botão de confirmação'

}

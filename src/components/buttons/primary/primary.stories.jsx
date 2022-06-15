import Button from '.'

export default {
  title: 'General Components/Buttons/PrimaryButton',
  component: Button
}

const Template = args => <Button {...args} />

export const PrimaryButton = Template.bind({})

PrimaryButton.args = {
  icon: null,
  onClick: () => { },
  text: 'Botão de confirmação'

}

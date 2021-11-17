import Button from '.'

export default {
  title: 'InfoButton',
  component: Button
}

const Template = args => <Button {...args} />

export const InfoButton = Template.bind({})

InfoButton.args = {
  icon: null,
  onClick: () => { },
  text: 'Importar dados'
}

import Button from '.'

// configuração da aba do componente na pagina do storybook
export default {
  title: 'Button',
  component: Button
}

const Template = args => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  icon: null,
  onClick: () => { },
  text: 'Botão de confirmação',
  classe: 'button-new-process'
}

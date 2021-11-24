import Button from '.'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

// configuração da aba do componente na pagina do storybook
export default {
  title: 'Button',
  component: Button
}

const Template = args => <Button {...args} />

export const PrimaryButton = Template.bind({})
export const IconButton = Template.bind({})

PrimaryButton.args = {
  icon: null,
  onClick: () => { },
  text: 'Botão de confirmação',
  classe: 'button-new-process'
}

IconButton.args = {
  icon: faAngleDown,
  onClick: () => { },
  text: 'Botão de confirmação',
  classe: 'button-new-process'
}

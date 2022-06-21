import { HiringProcessForm } from '.'

// configuração da aba do componente na pagina do storybook
export default {
  title: 'Page Components/HiringProcess/HiringProcessForm',
  component: HiringProcessForm
}

const Template = args => <HiringProcessForm {...args} />

export const HiringForm = Template.bind({})

HiringForm.args = {
  method: 'POST',
  id: ''
}

import { HiringProcessForm } from '.'

// configuração da aba do componente na pagina do storybook
export default {
  title: 'Page Components/Pages/Hiring Process/Forms/Hiring Process/HiringProcessForm',
  component: HiringProcessForm
}

const Template = args => <HiringProcessForm {...args} />

export const HiringForm = Template.bind({})

HiringForm.args = {
  method: 'POST',
  id: ''
}

import Select from '.'

export default {
  title: 'Select',
  component: Select
}

const Template = args => <Select {...args} />

export const select = Template.bind({})

select.args = {
  options: [
    { label: 'Backend', value: 0 },
    { label: 'Frontend', value: 1 },
    { label: 'Fullstack', value: 2 }
  ],
  onChange: () => { alert('Trocou de valor') },
  placeholder: 'Tipo',
  name: '',
  label: 'Filtrar:'
}

import Select from '.'

export default {
  title: 'Select',
  component: Select
}

const Template = args => <Select {...args} />

export const select = Template.bind({})

select.args = {
  options: [
    { label: 'backend', value: 0 },
    { label: 'frontend', value: 1 },
    { label: 'fullstack', value: 2 }
  ],
  onChange: () => { alert('Trocou de valor') },
  placeholder: 'tipo',
  name: '',
  label: 'Filtrar:'
}

import { ProcessList } from '.'

export default {
  title: 'ProcessList',
  component: ProcessList
}

const Template = args => <ProcessList {...args} />

export const HiringProcessList = Template.bind({})

HiringProcessList.args = {
  processes: [
    { name: '2022.1', startDate: '12/31/2020', endDate: '12/31/2022' },
    { name: '2023.1', startDate: '01/31/2020', endDate: '12/31/2020' },
    { name: '2023.2', startDate: '01/31/2022' }
  ]
}

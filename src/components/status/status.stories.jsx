import { Status } from '.'

export default {
  title: 'General Components/Status/Status',
  component: Status
}

const Template = args => <Status{...args} />

export const StatusGreen = Template.bind({})
export const StatusRed = Template.bind({})
export const StatusYellow = Template.bind({})

StatusGreen.args = {
  status: ['status-opened']
}

StatusRed.args = {
  status: 'status-closed'
}

StatusYellow.args = {
  status: 'status-preparing'
}

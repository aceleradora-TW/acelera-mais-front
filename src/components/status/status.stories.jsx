import { Status } from '.'

export default {
  title: 'General Components/Status',
  component: Status
}

const Template = args => <Status{...args} />

export const StatusGreen = Template.bind({})
export const StatusRed = Template.bind({})
export const StatusYellow = Template.bind({})

const options = {
  status: {
    green: ['status-opened'],
    red: ['status-closed'],
    yellow: ['status-preparing']
  },
  label: {
    green: 'status.opened',
    red: 'status.closed',
    yellow: 'status.preparing'
  }
}
StatusGreen.args = {
  status: 'status-opened',
  options
}

StatusRed.args = {
  status: 'status-closed',
  options
}

StatusYellow.args = {
  status: 'status-preparing',
  options
}

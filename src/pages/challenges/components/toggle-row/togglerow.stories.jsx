import { ToggleRow } from '.'
import { BrowserRouter } from 'react-router-dom'
import '../../../../utils/i18next'
import { Table } from '../../../../components/table/table'

export default {
  title: 'Page Components/Pages/Challenges/ToggleRow',
  component: ToggleRow
}

const Template = args => {
  return (
      <BrowserRouter>
        <Table>
          <ToggleRow {...args} />
        </Table>
      </BrowserRouter>
  )
}

export const toggleRow = Template.bind({})

toggleRow.args = {
  item: {
    exercises: [
      {
        id: 924,
        evaluation: {
          id: 924,
          mentorName: 'Nome da mentora',
          feedback: 'Foi muito bem',
          score: 0,
          createdAt: '2022-05-24T18:20:10.125Z',
          updatedAt: '2022-05-25T13:33:56.036Z'
        },
        name: 'Exercício Energéticos Accelerator',
        type: 'zip',
        link: 'https://drive.google.com',
        createdAt: '2022-05-24T18:20:10.125Z',
        updatedAt: '2022-05-24T18:20:10.125Z'
      }
    ],
    challenge: 'Exercício Energéticos Accelerator',
    exerciseStatement: null,
    cityState: null,
    type: 'Backend',
    createdAt: '2022-03-16T14:51:55.022Z',
    updatedAt: '2022-05-25T12:24:49.611Z'
  }
}

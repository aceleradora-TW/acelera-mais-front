import styled from 'styled-components'
import { Table } from '../../../../components/table/table'

export const ExerciseTable = styled(Table)`
  td {
    border-bottom: 1px dotted #ababab;

    &.toggle-on{
      background-color: #f8f8f8;
      padding: 20px 5px;
      border-bottom: 1px solid rgb(160, 173, 185);
    }

    &.toggle-off{
      display: none;
    }
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

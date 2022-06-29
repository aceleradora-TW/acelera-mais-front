import styled from 'styled-components'
import { Table } from '../../../../components/table/table'

export const Container = styled.div`
  margin-top: 20px;
`
export const HiringProcessTable = styled(Table)`
  a {
    font-weight: bold;
    color: #000;
  }

  a:visited {
    color: #ababab;
  }
`

export const ModalCandidateContent = styled.div`
flex-direction: column;
max-height: 300px;
overflow: auto;
max-width: 200px;

p {
  padding: 5px; 
}
`

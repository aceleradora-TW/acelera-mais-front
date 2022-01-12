import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  font-family: Arial, sans-serif;
  border: 1px solid #ababab;

  th, td {
    padding: 10px;
  }

  thead {
    font-size: 16px;
    th {
      border-bottom: 1px solid #ababab;
    }
  }

  tbody {
    font-size: 14px;
    text-align: center;
  }
`

export const TableContainer = () => {
  return (<Table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Fulana</td>
        <td>16</td>
      </tr>
      <tr>
        <td>Fulana</td>
        <td>16</td>
      </tr>
      <tr>
        <td>Fulana</td>
        <td>16</td>
      </tr>
    </tbody>
  </Table>)
}

import styled from 'styled-components'

export const ProcessTable = styled.div`
width: 100%;
margin-top: 20px;

a {
  color: #000;
}

a:visited, th {
  color: #ababab;
}

table {
  width: 100%;
  border: 1px solid #ababab;
}

thead {
  border-bottom: 1px solid #ababab;
}

th, td, td:first-child {
  text-align: center;
}

td, th {
  padding: 10px;
}

th {
  font-family: Arial, Helvetica, sans-serif;
}

td:first-child {
  font-weight: bold;
}
`

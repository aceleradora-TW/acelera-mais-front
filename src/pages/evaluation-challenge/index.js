
import { React } from 'react'
import './style.css'

export const EvaluationChallenge = () => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Avaliação</th>
          </tr>
        </thead>
        <div className="select">

          <tr>
            <td>
              <label htmlFor='select'>Tipo: </label>
            </td>
          </tr>
          <tr>
            <td>
              <select name="select" id="select">
                <option value="BackEnd" selected>BackEnd</option>
                <option value="FrontEnd">FrontEnd</option>
              </select>
            </td>
          </tr>
        </div>
      </table>
    </div >
  )
}
export default EvaluationChallenge

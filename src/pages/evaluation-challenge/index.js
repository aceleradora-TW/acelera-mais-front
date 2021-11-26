
import { React } from 'react'
import './style.css'

export const EvaluationChallenge = () => {
  return (
    <div className="table">
      <h1>Avaliação</h1>
      <div className="select">
        <table>
          <tr>
            <td>
              <label htmlFor='select'>Tipo:</label>
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
        </table>
      </div>
    </div >
  )
}
export default EvaluationChallenge

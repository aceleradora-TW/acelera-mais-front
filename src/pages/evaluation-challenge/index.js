
import { React } from 'react'
import './style.css'

export const EvaluationChallenge = () => {
  return (
  <div className="table">
  <h1>Avaliação</h1>
    <div className="select">
       <label htmlFor='select'>tipo</label>
       <select name="select" id="select">
       <option value="BackEnd" selected>BackEnd</option>
       <option value="FrontEnd">FrontEnd</option>
       </select>
       </div>
    </div>
  )
}
export default EvaluationChallenge

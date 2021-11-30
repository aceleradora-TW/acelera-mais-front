
import { React } from 'react'
import './style.css'

export const EvaluationChallenge = () => {
  return (
    <section className="table">

          <div className="primeira">
            <p>Avaliação</p>
            </div>

             <div className="segunda">
              <span>Tipo: </span>
              <select name="select" id="select">
                <option value="BackEnd" selected>BackEnd</option>
                <option value="FrontEnd">FrontEnd</option>
              </select>
              </div>

        </section>

  )
}
export default EvaluationChallenge

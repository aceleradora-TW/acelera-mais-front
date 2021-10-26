import Button from '../../components/button'
import { ProcessList } from '../../components/hiring-process-list'
import './style.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const HiringProcessPage = () => {
  const processes = [
    {
      name: '2021/1',
      startDate: new Date(2021, 11, 15).toISOString(),
      endDate: new Date(2021, 11, 21).toISOString(),
      description: 'A description'
    },
    {
      name: '2021/2',
      startDate: new Date(2021, 9, 22).toISOString(),
      endDate: new Date(2022, 10, 27).toISOString(),
      description: 'A description'
    },
    {
      name: '2021/2',
      startDate: new Date(2021, 8, 18).toISOString(),
      endDate: new Date(2021, 8, 19).toISOString(),
      description: 'A description'
    }
  ]

  const handleSubmit = () => {
    console.log('fui clicado')
  }

  return (
    <div className="hiring-page">
        <h1>Processos seletivos</h1>
        <section>
            <div>
            <Button classe={'button-filter'} text="Todos" onClick={handleSubmit} />
            <Button classe={'button-filter'} text="Abertos" onClick={handleSubmit} />
            <Button classe={'button-filter'} text="Fechados" onClick={handleSubmit} />
            </div>
            <Button icon={faPlus} classe={'button-new-process'} text="Novo processo" onClick={handleSubmit}/>
        </section>
        <ProcessList processes={processes} />
    </div>
  )
}

export default HiringProcessPage

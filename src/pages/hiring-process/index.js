import Button from '../../components/button'
import { ProcessList } from '../../components/precess-list'
import './style.css'

const HiringProcessPage = () => {
  const processes = [
    {
      name: '2021.1',
      startDate: new Date(2021, 12, 15).toString(),
      endDate: new Date(2021, 10, 21).toString(),
      description: 'A description'
    },
    {
      name: '2021.2',
      startDate: new Date(2021, 10, 22).toString(),
      endDate: new Date(2022, 10, 27).toString(),
      description: 'A description'
    },
    {
      name: '2021.2',
      startDate: new Date(2021, 10, 18).toString(),
      endDate: new Date(2021, 10, 19).toString(),
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
            <Button classe={'button-new-process'} text="Novo processo" onClick={handleSubmit}/>
        </section>
        <ProcessList processes={processes} />
    </div>
  )
}

export default HiringProcessPage

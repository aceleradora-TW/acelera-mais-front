import Button from '../../components/button'
import { ProcessList } from '../../components/precess-list'
import './style.css'

const HiringProcessPage = () => {
  const processes = [
    {
      name: '2021.1',
      startDate: '12/15/2021',
      endDate: '12/25/2021',
      description: 'A description'
    },
    {
      name: '2021.2',
      startDate: '12/15/2021',
      endDate: undefined,
      description: 'A description'
    },
    {
      name: '2021.2',
      startDate: '12/15/2021',
      endDate: undefined,
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

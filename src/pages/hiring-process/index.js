import Button from '../../components/button'
import './style.css'

const HiringProcessPage = () => {
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

    </div>
  )
}

export default HiringProcessPage

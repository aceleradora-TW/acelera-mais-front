import './style.css'

export const Formulario = () => {
  return (
    <>
      <div className="processo">
        <h1>processos seletivos</h1>
      </div>
      <div className="fundo">
        <div className="inputs">
        <form>
          <p>Nome</p>
          <input type="text"></input>
          <br/>
          <p>Data de Inicio</p>
          <input type="date"></input>
          <br/>
          <p>Data Final</p>
          <input type="date"></input>
          <br/>
          <p>Descrição</p>
          <input type="text"></input>
        </form>
        </div>
      </div>
    </>
  )
}

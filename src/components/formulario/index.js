import './style.css'

export const Formulario = () => {
  return (
<div>classe<div>
<p>Formulario</p>        
<form>
 <label>Meu Nome É:</label>  
 <input type="text" id="nome">
  
  <br/> 
  <br/>
  
  <label>Meu Aniversário</label>
  <input type="date" id="meu-aniversário">
  
  <br/>
  <br/>
  
  <label>Cor Preferida</label>
  <input type="color" id="cor">
  
  <br/>
  <br/>
  
  <label>Comida Preferida:</label>
  
  <br/>
  <br/>
  
  <input type="radio" name="comida" value="pizza">Pizza
  
  

  
  <br/>
  <br/>
  
  <input type="radio" name="comida" value="strogonoff">Strogonoff
  
  <br/>
  <br/>
  
  <input type="radio" name="comida" value="cachorro-quente">Cachorro Quente
  
  <br/>
  <br/>
  
  <input type="radio" name="comida" value="lasanha">Lasanha
  
   <br/>
   <br/>
  
  <label>Gosto de assistir:</label> 
  
  <br/>
  <br/>
  
  <input type="checkbox" id="gosto-assistir" value="filme"> Filmes
  
  <br/>
  <br/>
  
  <input type="checkbox" id="gosto-assistir" value="desenho"> Desenhos
  
  <br/>
  <br/>
  
   <input type="checkbox" id="gosto-assistir" value="anime"> Animes
  
  <br/>
  <br/>
  
    <input type="checkbox" id="gosto-assistir" value="novela"> Novelas
  
  <br/>
  <br/>
  
    <input type="reset" id="Limpar" value="Limpar">   
  
  <br/>
  
    <input type="submit" id="Enviar" value="Enviar">
    </form>
    </div>
  )
}

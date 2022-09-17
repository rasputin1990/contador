import './App.css';
import { useState } from 'react';


function App() {
    
    const [contador, setContador] = useState (0);

    function handleBotoMenys() {
      if(contador >0) {
      setContador(contador - 1)} ;
  }
  function handleBotoMes() {
    setContador(contador + 1);
}
  return (
    <div className="container">
      <div className ="row">
       <h1>Contador</h1>
       <div className= "grupBotons">
          <button type="button" className="btn btn-danger"
          onClick={handleBotoMenys}
          >Restar</button>
          <p className= "contador">{contador}</p>
          <button type="button" className="btn btn-info"
          onClick={handleBotoMes}
          >Sumar</button>
        </div>
        <div className="reiniciar">
          <button type="button" className="btn btn-light"
          onClick={() => setContador(0)}>Reiniciar</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;

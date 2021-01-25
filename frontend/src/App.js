import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const [inputFrutas, setInputFrutas] = React.useState("");
  const [inputTitulo, setInputTitulo] = React.useState("");
  //Redux
  const frutas = useSelector((state) => state.frutasReducer.frutas);
  const stateTitulo = useSelector((state) => state.tituloReducer.titulo);

  const dispatch = useDispatch();

  function adicionarFruta(event) {
    event.preventDefault();

    const objFruta = {
      nome: inputFrutas
    }

  dispatch({type: "ADICIONAR", value: objFruta});
  }

  function alterarTitulo(event) {
    setInputTitulo(event.target.value);
    dispatch({type: "ALTERAR", value: event.target.value});
  }
 
  return (
    <div className="div">
      <form>
        <label>Titulo:</label> 
        <input placeholder="Digíte um titulo para sua lista de frutas..." className="input1"
        value={inputTitulo}
        onChange ={alterarTitulo}
        />
      </form>
      <h1>{stateTitulo}</h1>
      <form onSubmit={adicionarFruta}>
        <input placeholder="Digíte uma fruta..."className="input2"
        value={inputFrutas} 
        onChange ={(event) => setInputFrutas(event.target.value)} />
      
      <button>
        Enviar
      </button>
      </form>

      {frutas.map((fruta, index) =>{
        return (
          <li key={index}>{fruta.nome}</li>
        )
      })}
    </div>
  );
}

export default App;

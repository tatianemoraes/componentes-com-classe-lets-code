import React from 'react';

class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nome: undefined, txtNome: '' };
  }

  changetxtName = (event) => {
    this.setState({ txtNome: event.target.value });
  }

  persistName = () => {
    this.setState({
      // aqui o nome pega o valor que está no txtNome
      nome: this.state.txtNome
    });
  }

  render() {
    // se não tiver nome, renderiza apenas o input
   const renderForm = () => {
    return (
      <>
          Nome: <input 
          type='text' 
          value={ this.state.nome }
          onChange={ this.changetxtName }  
        >
        </input>
        <button
          onClick={ this.persistName }
        >
          Salvar
        </button>
      </>
    );
   }
    
   const renderText = () => {
     // se tiver imprime "olá + nome"
     return (
      <>
        <p>Olá { this.state.nome }</p>
      </>
    );
   }

   return !this.state.nome ? renderForm() : renderText(); 
  }
} 

export default App4;
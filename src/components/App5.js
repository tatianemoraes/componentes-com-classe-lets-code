import React from 'react';

class App5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nome: undefined, txtNome: '' };
  }

  changetxtName = (event) => {
    this.setState({ txtNome: event.target.value });
  }
  
  // quando componente é construído
  // executado logo após o componente ser criado
  // se tiver nome salvo na sessionStorage
  // mostra a saudação "olá + nome" direto, sem mostrar o input
  componentDidMount = () => {
    const nome = sessionStorage.getItem('nome');
    if(nome) {
      this.setState({ nome });
    }
  }

  persistName = () => {
    this.setState({
      nome: this.state.txtNome
    });
    sessionStorage.setItem('nome', this.state.txtNome);
  }

  render() {
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
     return (
      <>
        <p>Olá { this.state.nome }</p>
      </>
    );
   }

   return !this.state.nome ? renderForm() : renderText(); 
  }
} 

export default App5;

// Já existe uma marcação do método componentWillMount para depreciação, ele não estará disponível nas futuras versões do React
// Da mesma forma que o método componentWillMount, o método componentWillRecieveProps já está marcado para depreciação, ele não estará disponível nas futuras versões do React.
// componentWillUpdate também é um método marcado para depreciação, ele não estará disponível nas futuras versões do React.
// Os métodos marcado para depreciação serão substituídos mas continuarão disponíveis pelos nomes:

// UNSAFE_componentWillMount
// UNSAFE_componentWillReceiveProps
// UNSAFE_componentWillUpdate

// O novo método que substitui o componentWillReceiveUpdate será:

// getDerivedStateFromProps

import React from 'react';

class App3 extends React.Component {
  constructor(props) {
    super(props);

    // declarando o estado inicial
    // o react entende quando é passado nome no changeName
    // que não deve alterar idade e somente name
    this.state = { nome: '', idade: 26 };

    // 1 solução
    //sobrescreve o significado do this
    // o this do onChange estava confrontando com o da função
    // a função entendia que o this era dela e não do state
    // this.changeName = this.changeName.bind(this);
  }

  // arrow function não tem this
  // por isso não sobrescreve e entende o this do state
  changeName = (event) => {
    this.setState({ nome: event.target.value });
  }

  render() {
    return (
      <>
        Nome: <input 
          type='text' 
          value={ this.state.nome }
          onChange={ this.changeName }  
        >
        </input>
        <p>Olá { this.state.nome }</p>
      </>
    );
  }
}

export default App3;
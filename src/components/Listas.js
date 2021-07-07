import React from 'react';

// PARA LISTAS MAIS SIMPLES:
// class Listas extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: ['item1', 'item2', 'item3', 'item4']
//     }
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
//       </ul>
//     )
//   }
// }




// PARA LISTAS MAIS COMPLEXAS:
class Listas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {id: 1, nome: 'item1', completo: false},
        {id: 2, nome: 'item2', completo: false},
        {id: 3, nome: 'item3', completo: true},
        {id: 4, nome: 'item4', completo: false},
      ]
    }
  }

  render() {
    return (
      <>
        <ul>
          {this.state.items.map((item) => (
            <Item key={item.id} completo={item.completo}>{ item.nome }</Item>
          ))}
        </ul>
      </>
    )
  }
}

class Item extends React.Component{
  constructor(props){
    // props da li vem dessa props
    super(props);
  }

  render(){
    const textDecoration = this.props.completo ? 'line-through' : 'none'
    
    return (
      <li data-id={this.props.id} style={{ textDecoration }}>
        {this.props.children}
      </li>
    )
  }
}

export default Listas;
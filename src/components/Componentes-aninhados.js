import React from 'react';

class ComponentesAninhados extends React.Component {
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
          {React.Children.map(this.props.children, child => child.type === Item ? child : null)}
          {this.state.items.map((item) => (
            <Item key={item.id} completo={item.completo}>{ item.nome }</Item>
          ))}
        </ul>
      </>
    )
  }
}


// no index.js
// tudo o que for colocado entre as tags é children do componente
//   <ComponentesAninhados>
//     <Item key={999} id={999} completo={false}>Teste1</Item>
//  </ComponentesAninhados>

// this.props.children está pegando a props que foi passada no componente do arquivo
// no index

// para não ser renderizado texto entre as tags ver linha 21

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

export {ComponentesAninhados, Item};
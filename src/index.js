import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
// import App2 from './components/App2';
// import App3 from './components/App3';
// import App4 from './components/App4';
// import App5 from './components/App5';
// import Listas from './components/Listas';
// import { ComponentesAninhados, Item } from './components/Componentes-aninhados';
import Formulario from './components/Formulario';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App2 title='Título'>
      Conteúdo
    </App2> */}
    {/* <ComponentesAninhados> */}
      {/* <Item key={999} id={999} completo={false}>Teste1</Item>
    </ComponentesAninhados> */}
    <Formulario/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

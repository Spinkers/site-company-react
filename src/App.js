import React from 'react';
import Site from './components/navegacao';
import Rodape from './components/rodape/index';
import Contato from './components/contato/index';
import Precos from './components/precos/index';
import Portifolio from './components/portifolio/index';
import Servicos from './components/servicos/index';
import Sobre from './components/sobre/index';
import Jumbotron from './components/jumbotron/index';
import Navegacao from './components/navegacao/index';

function App() {
  return (
    <div className="App">
      <Navegacao />
      <Jumbotron />
      <Sobre />
      <Servicos />
      <Portifolio />
      <Precos />
      <Contato />
      <Rodape />
    </div>
  );
}

export default App;
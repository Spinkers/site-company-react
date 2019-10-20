import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Rodape from './components/rodape/index';
import Contato from './components/contato/index';
import Precos from './components/precos/index';
import Portifolio from './components/portifolio/index';
import Servicos from './components/servicos/index';
import Sobre from './components/sobre/index';
import Navegacao from './components/navegacao/index';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navegacao />

        <Route path='/' component={Sobre} exact />
        <Route path='/servicos' component={Servicos} />
        <Route path='/portifolio' component={Portifolio} />
        <Route path='/precos' component={Precos} />
        <Route path='/contato' component={Contato} />
        
        <Rodape />
      </div>
    </BrowserRouter>
  );
}

export default App;
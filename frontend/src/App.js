import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Inicio from './pages/Inicio.jsx';
import Pedei from './pages/Pedei.jsx';
import Professores from './pages/Professores.jsx';
import EmpresasJuniores from './pages/EmpresasJuniores.jsx';
import EquipesdeCompeticao from './pages/EquipesdeCompeticao.jsx';
import Disciplinas from './pages/Disciplinas.jsx';
import Editais from './pages/Editais.jsx';
import Contatos from './pages/Contatos.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/"element={<Inicio/>}/>
          <Route path="/pedei"element={<Pedei/>}/>
          <Route path="/professores"element={<Professores/>}/>
          <Route path="/empresasjuniores"element={<EmpresasJuniores/>}/>
          <Route path="/equipesdecompetição"element={<EquipesdeCompeticao/>}/>
          <Route path="/disciplinas"element={<Disciplinas/>}/>
          <Route path="/editais"element={<Editais/>}/>
          <Route path="/contatos"element={<Contatos/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;

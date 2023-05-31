import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Inicio from './pages/Inicio.jsx';
import Pedei from './pages/Pedei.jsx';
import Professores from './pages/Professores.jsx';
import EmpresasJuniores from './pages/EmpresasJuniores.jsx';
import EquipesdeCompeticao from './pages/EquipesdeCompeticao.jsx';
import Premiacoes from './pages/Premiacoes.jsx';
import Editais from './pages/Editais.jsx';
import Contatos from './pages/Contatos.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/2023.1-HEART-hub-fga-inovacao"element={<Inicio/>}/>
          <Route path="/pedei"element={<Pedei/>}/>
          <Route path="/professores"element={<Professores/>}/>
          <Route path="/empresasjuniores"element={<EmpresasJuniores/>}/>
          <Route path="/equipesdecompetição"element={<EquipesdeCompeticao/>}/>
          <Route path="/premiações"element={<Premiacoes/>}/>
          <Route path="/editais"element={<Editais/>}/>
          <Route path="/contatos"element={<Contatos/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;

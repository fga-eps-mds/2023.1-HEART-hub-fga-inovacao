import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Inicio from './pages/Inicio.jsx';
import Iniciativas from './pages/Iniciativas.jsx';
import Competencias from './pages/Competencias.jsx';
import Empresas from './pages/Empresas.jsx';
import Disciplinas from './pages/Disciplinas.jsx';
import Editais from './pages/Editais.jsx';
import Contatos from './pages/Contatos.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/inicio"element={<Inicio/>}/>
          <Route path="/iniciativas"element={<Iniciativas/>}/>
          <Route path="/competencias"element={<Competencias/>}/>
          <Route path="/empresas"element={<Empresas/>}/>
          <Route path="/disciplinas"element={<Disciplinas/>}/>
          <Route path="/editais"element={<Editais/>}/>
          <Route path="/contatos"element={<Contatos/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;

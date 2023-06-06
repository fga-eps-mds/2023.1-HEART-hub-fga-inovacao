import React, { useState, useEffect } from 'react';
import './Pedei.css';
import { FiLink,
  FiGithub,
  FiFigma,
  FiLinkedin, 
} from "react-icons/fi";

const Pedei = () => {
  const [laboratoriosData, setLaboratoriosData] = useState([]);
  const [iniciativasData, setIniciativasData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/2023.1-HEART-hub-fga-inovacao/static/Laboratorios.json')
      .then((response) => response.json())
      .then((data) => setLaboratoriosData(data));

    fetch('http://localhost:3000/2023.1-HEART-hub-fga-inovacao/static/PDI.json')
      .then((response) => response.json())
      .then((data) => setIniciativasData(data));
  }, []);

  return (
    <section className="App-pedei">

      <section className='first-section-pedei'>
        <div className='div-pedei'>
          <h1 className='pedei'>P&D&I</h1>
          <p className='p-pedei'>
          Explore as atividades de <strong className='strong-pedei'>Pesquisa, Desenvolvimento e Inovação (P&D&I)</strong> na FGA UnB. Descubra os projetos em andamento, as tecnologias inovadoras sendo desenvolvidas e os resultados alcançados por nossa comunidade acadêmica. Acesse recursos e informações sobre parcerias de pesquisa, publicações e oportunidades de colaboração na área de inovação.
          </p>
        </div>
      </section>

      <section className='first-section-pedei'>
        <div className='div-lab'>
          <h1 className='lab'>Laboratórios</h1>
        </div>
        <div className="card-grid">
          {laboratoriosData.map((item, index) => {
            const { logo, nome, descricao, link } = item;
            return (
              <div className="card-container" key={index}>
                <img src={logo} alt="Card Image" className='card-img' />
                <h1 className='card-title'>{nome}</h1>
                <p className='card-description'>{descricao}</p>
                <a href={link} className='card-btn'>Saiba mais</a>
              </div>
            );
          })}
        </div>
      </section>
      
      <section className='first-section-pedei'>
        <div className='div-lab'>
          <h1 className='lab'>Iniciativas</h1>
        </div>
        <div className="card-grid">
          {iniciativasData.map((item, index) => {
            const { logo, nome, descricao, link } = item;
            return (
              <div className="card-container" key={index}>
                <img src={logo} alt="Card Image" className='card-img' />
                <h1 className='card-title'>{nome}</h1>
                <p className='card-description'>{descricao}</p>
                <a href={link} className='card-btn'>Saiba mais</a>
              </div>
            );
          })}
        </div>
      </section>

      <section class="footer-basic">
        <footer>
          <div class="social">
            <a href="https://github.com/fga-eps-mds/2023.1-HEART-hub-fga-inovacao">
              <i class="icon ion-social-instagram">
                <FiGithub/>
              </i>
            </a>
            <a href="#">
              <i class="icon ion-social-snapchat">
                <FiLinkedin/>
              </i>
            </a>
            <a href="https://www.figma.com/file/oiha0mXD5eHoqBSWUEPlPR/Heart---HUB-FGA-Inova%C3%A7%C3%A3o?type=design&node-id=0%3A1&t=7mEIQJVT3hkgRnyL-1">
              <i class="icon ion-social-twitter">
                <FiFigma/>
              </i>
            </a>
            <a href="#">
              <i class="icon ion-social-facebook">
                <FiLink/>
              </i>
            </a>
            </div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="pedei">P&D&I</a></li>
                <li class="list-inline-item"><a href="professores">Professores</a></li>
                <li class="list-inline-item"><a href="empresasjuniores">Empresas Juniores</a></li>
                <li class="list-inline-item"><a href="equipesdecompetição">Equipes de Competição</a></li>
                <li class="list-inline-item"><a href="disciplinas">Disciplinas</a></li>
                <li class="list-inline-item"><a href="editais">Editais</a></li>
                <li class="list-inline-item"><a href="contatos">Contatos</a></li>
            </ul>
            <p class="copyright">Heart - HUB FGA Inovação © 2023</p>
        </footer>
      </section>

    </section>
  );
}

export default Pedei;
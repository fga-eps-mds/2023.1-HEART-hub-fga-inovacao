import React, { useState, useEffect } from 'react';
import './Pedei.css';
import img_logo from '../img/logo-unb.png';
import img_fga from '../img/fga.png';
import { FiLink,
  FiGithub,
  FiFigma,
  FiLinkedin,
  FiInstagram, 
} from "react-icons/fi";

const Pedei = () => {
  const [laboratoriosData, setLaboratoriosData] = useState([]);
  const [iniciativasData, setIniciativasData] = useState([]);

  useEffect(() => {
    fetch('https://api.npoint.io/45be5e7e4f7d5c9b35f6')
      .then((response) => response.json())
      .then((data) => setLaboratoriosData(data));

    fetch('https://api.npoint.io/fff2295cb9f88f82255f')
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

      <section>
      <div className="footer-basic">
          <footer>
            <div className="social">
              <a href="https://github.com/fga-eps-mds/2023.1-HEART-hub-fga-inovacao">
                <i className="icon ion-social-instagram">
                  <FiGithub/>
                </i>
              </a>
              <a href="#">
                <i className="icon ion-social-snapchat">
                  <FiLinkedin/>
                </i>
              </a>
              <a href="https://www.figma.com/file/oiha0mXD5eHoqBSWUEPlPR/Heart---HUB-FGA-Inova%C3%A7%C3%A3o?type=design&node-id=0%3A1&t=7mEIQJVT3hkgRnyL-1">
                <i className="icon ion-social-twitter">
                  <FiFigma/>
                </i>
              </a>
              <a href="#">
                <i className="icon ion-social-facebook">
                  <FiInstagram/>
                </i>
              </a>
            <p className='texto_footer'>Este HUB é referente à Universidade de Brasília - Campus Gama</p>
            </div>
              <ul className="list-inline">
                <li className="list-inline-item"><a href="2023.1-HEART-hub-fga-inovacao/pedei">P&D&I</a></li>
                <li className="list-inline-item"><a href="2023.1-HEART-hub-fga-inovacao/professores">Professores</a></li>
                <li className="list-inline-item"><a href="2023.1-HEART-hub-fga-inovacao/empresasjuniores">Empresas Juniores</a></li>
                <li className="list-inline-item"><a href="2023.1-HEART-hub-fga-inovacao/equipesdecompetição">Equipes de Competição</a></li>
                <li className="list-inline-item"><a href="2023.1-HEART-hub-fga-inovacao/premiações">Premiações</a></li>
                <li className="list-inline-item"><a href="2023.1-HEART-hub-fga-inovacao/editais">Editais</a></li>
                <li className="list-inline-item"><a href="2023.1-HEART-hub-fga-inovacao/contatos">Contatos</a></li>
              </ul>
            <p className="copyright">Heart - HUB FGA Inovação © 2023</p>
            <div className='logo_unb'>
            <a href="https://www.unb.br/">
              <img className="img_logo" src={img_logo} alt="logo"/>
            </a>
            <a href="https://fga.unb.br/">
              <img className='fga' src={img_fga} alt='fga'/>
            </a>
            </div>
          </footer>
        </div>
      </section>

    </section>
  );
}

export default Pedei;
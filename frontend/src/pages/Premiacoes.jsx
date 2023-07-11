import React, { useState, useEffect } from 'react';
import './Premiacoes.css';
import img_logo from '../img/logo-unb.png';
import img_fga from '../img/fga.png';
import { FiLink,
  FiGithub,
  FiFigma,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

const Premiacoes = () => {
  const [premiacoesData, setPremiacoesData] = useState([]);

  useEffect(() => {
    fetch('https://api.npoint.io/60a296c20325f11a68bc')
      .then((response) => response.json())
      .then((data) => setPremiacoesData(data));
  }, []);

  return (
    <section className="App-premiacoes">

      <section className='first-section-premiacoes'>
        <div className='div-premiacoes'>
          <h1 className='premiacoes'>Premiações</h1>
          <p className='p-premiacoes'>
          Explore as conquistas e <strong className='strong-premiacoes'>Premiações</strong> na FGA UnB. Descubra aqui que as premiações que ocorrem dentro da Faculdade do Gama-FGA oferece um panorama das conquistas acadêmicas, reconhecimentos e destaques obtidos por estudantes, professores e equipes, inspirando orgulho e incentivando a busca por excelência na instituição.
          </p>
        </div>
      </section>

      <section className='first-section-premiacoes'>
        <div className='div-premio'>
        </div>
        <div className="card-grid">
          {premiacoesData.map((item, index) => {
            const { logo, titulo, noticia, link } = item;
            return (
              <div className="card-container" key={index}>
                <img src={logo} alt="Card Image" className='card-img' />
                <h1 className='card-title'>{titulo}</h1>
                <p className='card-description'>{noticia}</p>
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
                <li className="list-inline-item"><a href="pedei">P&D&I</a></li>
                <li className="list-inline-item"><a href="professores">Professores</a></li>
                <li className="list-inline-item"><a href="empresasjuniores">Empresas Juniores</a></li>
                <li className="list-inline-item"><a href="equipesdecompetição">Equipes de Competição</a></li>
                <li className="list-inline-item"><a href="premiações">Premiações</a></li>
                <li className="list-inline-item"><a href="editais">Editais</a></li>
                <li className="list-inline-item"><a href="contatos">Contatos</a></li>
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


export default Premiacoes;
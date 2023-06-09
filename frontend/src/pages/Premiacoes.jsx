import React, { useState, useEffect } from 'react';
import './Premiacoes.css';
import { FiLink,
  FiGithub,
  FiFigma,
  FiLinkedin,
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
                <li class="list-inline-item"><a href="premiacoes">P&D&I</a></li>
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


export default Premiacoes;
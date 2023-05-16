import React from 'react';
import './Inicio.css'   
import HeartDesign from './../img/img5.png';
import { FiGithub,
  FiFigma,
  FiLinkedin,
  FiInstagram
} from "react-icons/fi";

const Inicio = () => {
  return (
    <section className='section'>
      <section className='first-section'>
          <div>
              <h1 className='quemsomos'>Quem somos?</h1>
              <p>
                  Somos o <strong className='strong'>HUB FGA Inovação</strong>, um portal de inovação que conecta<br />
                  estudantes, professores, pesquisadores e empreendedores em uma<br />
                  plataforma que estimula o desenvolvimento de projetos inovadores<br />
                  com impacto positivo na sociedade.<br />
                  <br />
                  Oferecemos <strong className='strong'>Capacitações, Mentorias e Recursos</strong> para transformar <br />
                  ideias em projetos bem-sucedidos e acreditamos na inovação e na<br />
                  colaboração para transformar o mundo e impulsionar a economia local.<br />
              </p>
              <a href="contatos" className="btn-saiba-mais">Saiba mais</a>
          </div>
          <div class="box-img-main">
              <img className="img" src={HeartDesign} alt="logo"/>
          </div>
      </section>
      <section className='second-section'>

      </section>
      <section className='third-section'>

      </section>
      <div class="footer-basic">
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
                  <FiInstagram/>
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
      </div>
    </section>
  );
};

export default Inicio;
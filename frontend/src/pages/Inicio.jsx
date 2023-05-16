import React from 'react';
import './Inicio.css'   
import HeartDesign from './../img/img5.png';
import { FiGithub,
  FiFigma,
  FiLinkedin,
  FiInstagram
} from "react-icons/fi";
import { FiUsers,
  FiAward,
  FiCalendar,
  FiBookOpen,
  FiCpu,
  FiBriefcase,
} from "react-icons/fi";

const Inicio = () => {
  return (
    <section className='section'>
      <section className='first-section'>
          <div>
              <h1 className='quemsomos'>Quem somos?</h1>
              <p className='p-i'>
                  Somos o <strong className='strong'>HUB FGA Inovação</strong>, um portal de inovação que conecta 
                  estudantes, professores, pesquisadores e empreendedores em uma 
                  plataforma que estimula o desenvolvimento de projetos inovadores 
                  com impacto positivo na sociedade.
                  Oferecemos <strong className='strong'>Capacitações, Mentorias e Recursos</strong> para transformar  
                  ideias em projetos bem-sucedidos e acreditamos na inovação e na 
                  colaboração para transformar o mundo e impulsionar a economia local. 
              </p>
              <a href="contatos" className="btn-saiba-mais">Saiba mais</a>
          </div>
          <div class="box-img-main">
              <img className="img" src={HeartDesign} alt="logo"/>
          </div>
      </section>
      <section className='second-section'>
        <div>

        </div>
        <div>

        </div>
      </section>
      <div className='aux'>
        <h1 className='unb'>UnB: O lugar certo para empreender e inovar</h1>
        <p className='p-i2'>A <strong className='strong'>Universidade de Brasília (UnB)</strong> é uma instituição pública de ensino superior brasileira, localizada na capital do país, Brasília. A universidade é reconhecida por sua excelência acadêmica e possui uma ampla gama de cursos de graduação e pós-graduação nas áreas de humanidades, ciências exatas, biológicas e da saúde. Além dessas qualidades, a UnB é também conhecida por sua relevância na produção científica, seu compromisso com a sustentabilidade ambiental e sua contribuição para o desenvolvimento econômico e social do Brasil. A Universidade de Brasília é, portanto, uma instituição de grande importância para o país e um símbolo do avanço do conhecimento e da ciência no Brasil.</p> 
      </div> 
      <section className='third-section'>
        <div>
          <ul className='bloco1'>
            <li className='li-b1'>
              <a className='a-b1' href="pedei"><FiCpu/> P&D&I</a> 
              <p className='p-b1'>Conheça as diversas iniciativas para o estimulo da inovação.</p>
            </li>
            <li className='li-b1'>
              <a className='a-b1' href="professores"><FiUsers/> Professores</a> 
              <p className='p-b1'>Consulte os pesquisadores e grupos de pesquisa da UnB.</p>
            </li>
            <li className='li-b1' >
              <a className='a-b1' href="empresasjuniores"><FiBriefcase/> Empresas</a>
              <p className='p-b1'>Conheça as empresas criadas por iniciativas de alunos e ex alunos da UnB.</p>
            </li>
          </ul>
        </div>
        <div>
          <ul className='bloco2'>
            <li className='li-b2'>
              <a className='a-b2' href="equipesdecompetição"><FiAward/> Equipes de Competição.</a>
              <p className='p-b2'>Tenha acesso as disciplinas ligadas a tecnologia e empreendedorismo da UnB.</p>
            </li>
            <li className='li-b2'>
              <a className='a-b2' href="disciplinas"><FiBookOpen/> Disciplinas</a>
              <p className='p-b2'>Fique por dentro de tudo que está rolando na UnB através dos editais abertos.</p>
            </li>
            <li className='li-b2'>
              <a className='a-b2' href="editais"><FiCalendar/> Editais</a>
              <p className='p-b2'>Tenha acesso aos meios de contato disponivel para falar com a UnB.</p>
            </li>
          </ul> 
        </div>
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